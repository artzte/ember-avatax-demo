import Ember from 'ember';
import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeCreateRecordResponse(store, primaryModelClass, payload, id, requestType) {
    const item = (Array.isArray(payload)) ? payload[0] : payload;

    return this._super(store, primaryModelClass, item, id, requestType);
  },

  normalizeArrayResponse: function(store, primaryModelClass, _payload, id, requestType) {
    let values;

    if (!_payload.value) {
      values = JSON.parse(_payload.text).value;
    } else {
      values = _payload.value;
    }

    values.meta = Object.keys(_payload).reduce((m, attr) => {
      if (/^@/.test(attr)) {
        m[attr] = _payload[attr];
      }

      return m;
    }, {});

    return this._super(store, primaryModelClass, values, id, requestType);
  },

  // API wants the primary key in the payload
  serialize(snapshot) {
    const json = this._super(...arguments);
    if (!Ember.isBlank(snapshot.id)) {
      json.id = snapshot.id;
    }

    return json;
  },

  keyForRelationship(key, typeClass) {
    switch (typeClass) {
      case 'belongsTo':
        return `${key}Id`;
      default:
        return this._super(...arguments);
    }
  },

  // See http://emberjs.com/api/data/classes/DS.JSONSerializer.html#method_extractErrors
  // Reformats the REST service error format to the expected format before passing the
  // transformed error object onto the _super.
  //
  // Service format from Express:
  //
  // {
  //   "error": {
  //     "message": "Some developer-friendly message",
  //     "code": "Some.non-changing.code",
  //     "details": [{
  //       "message": "Some field-level developer-friendly message",
  //       "code": "Some field-level code",
  //       "target": "attributeName",
  //     ]
  //   }
  // }
  //
  // Expected transformed format:
  //
  // {
  //   "errors": [{
  //       "detail": "Some developer-friendly message",
  //       "source": {
  //         "pointer": "data"
  //       }
  //     }, {
  //       "detail": "Some field-level developer-friendly message",
  //       "source": {
  //         "pointer": "data/attributes/attributeName"
  //       }
  //     }
  //   ]
  // }
  //
  // The errors are surfaced in the Ember Data model under the "errors" attribute,
  // as follows:
  //
  // errors: {
  //   base: [{message: 'Some developer-friendly message'}],
  //   attributeName: [{message: 'Some field-level developer-friendly message'}],
  // }
  //
  extractErrors(store, typeClass, payload, id) {
    const result = [];

    if (payload.errors && payload.errors[0]) {
      const error = payload.errors[0];

      result.push({
        detail: error.message,
        source: {
          pointer: 'data',
        },
      });

      const details = error.details || [];
      details.forEach(function cb(detail) {
        result.push({
          detail: detail.message,
          source: {
            pointer: `data/attributes/${detail.target}`,
          },
        });
      });

      return this._super(store, typeClass, {
        errors: result,
      }, id);
    }

    return this._super(...arguments);
  },
});
