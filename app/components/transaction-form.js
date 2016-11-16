import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'form',
  classNames: ['pure-form', 'pure-form-stacked'],
  submit(event) {
    event.preventDefault();
    const promise = this.get('action')(this.model);
    this.set('isGettingTax', promise);
    promise.finally(() => {
      this.set('isGettingTax', null);
    });
  },
});
