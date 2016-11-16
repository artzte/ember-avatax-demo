import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.queryRecord('transaction', {
      companyCode: this.modelFor('company').get('companyCode'),
      id: params.code,
    });
  },
});
