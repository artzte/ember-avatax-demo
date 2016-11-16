import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  date: Ember.computed('transaction.date', function() {
    return this.get('transaction.date').toDateString();
  }),
});
