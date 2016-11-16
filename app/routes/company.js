import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('company', params.companyCode);
  },
  afterModel(company) {
    return this.store.query('nexus', {
      companyId: company.id,
    });
  },
});
