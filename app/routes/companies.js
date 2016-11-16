import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('company', {});
  },
  setupController(controller, model) {
    const meta = model.get('meta');
    this._super(...arguments);
    controller.setProperties({
      count: meta['@recordsetCount'],
    });
  },
});
