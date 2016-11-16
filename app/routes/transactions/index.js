import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.query('transaction', {
      companyCode: this.modelFor('company').get('companyCode'),
      $top: '20',
      $skip: params.skip,
      $order: 'date DESC',
    });
  },
  setupController(controller, model) {
    const meta = model.get('meta');
    this._super(...arguments);
    controller.setProperties({
      count: meta['@recordsetCount'],
    });
  },
});
