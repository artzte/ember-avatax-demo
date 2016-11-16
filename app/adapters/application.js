import Ember from 'ember';
import DS from 'ember-data';
import config from 'avatax-demo/config/environment';
import basic from 'npm:basic-auth-token';
import _ from 'npm:underscore';

export default DS.RESTAdapter.extend({
  namespace: 'api/v2',
  isCompanyRoute: false,

  // Returns a companies/:id or accounts/:id prefix should the
  // snapshot have that association
  _getPrefix(snapshot, query) {
    if (this.isCompanyRoute) {
      if (query && query.companyId) {
        return `companies/${query.companyId}`;
      }

      if (snapshot.companyId) {
        return `companies/${snapshot.companyId}`;
      }

      throw new Error('Unable to build company route');
    }
  },

  buildURL(modelName, id, snapshot, requestType, query) {
    const segments = ['', this.namespace];
    const prefix = this._getPrefix(snapshot, query);

    if (prefix) {
      segments.push(prefix);
    }

    segments.push(this.pathForType(modelName));

    switch (requestType) {
      // covers id-appended routes
      case 'findRecord':
      case 'updateRecord':
      case 'deleteRecord': {
        segments.push(id);
        break;
      }

      case 'queryRecord':
        segments.push(query.id);
        break;

      case 'createRecord':
        return this.urlForCreateRecord();

      case 'findAll':
      case 'query':
      case 'findMany':
        break;

      default:
        throw new Error(`Unknown request for ${modelName}`);
    }
    return segments.join('/');
  },

  headers: Ember.computed(function() {
    return {
      Authorization: `Basic ${basic(config.APP.username, config.APP.password)}`,
    };
  }),

  isInvalid(status) {
    return status === 400;
  },

  parseErrorResponse() {
    const json = this._super(...arguments);
    return _.extend({}, {errors: [json.error || json]});
  },

  createRecord(store, type, snapshot) {
    var data = {};
    var serializer = store.serializerFor(type.modelName);
    var url = this.buildURL(type.modelName, null, snapshot, 'createRecord');

    serializer.serializeIntoHash(data, type, snapshot);

    if (!this.postSingleton) {
      data = [data];
    }

    return this.ajax(url, 'POST', { data: data });
  },

});
