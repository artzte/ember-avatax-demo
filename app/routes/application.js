import Ember from 'ember';

export default Ember.Route.extend({
  redirect(model, transition) {
    if (!transition.params.company) {
      this.transitionTo('companies');
    }
  },
});
