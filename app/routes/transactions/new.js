import Ember from 'ember';
import _ from 'npm:underscore';

export default Ember.Route.extend({
  model() {
    return {
      amount: 100,
      customerCode: 'Smeagol',
      purchaseOrderNo: Date.now(),
      date: new Date(),
    };
  },

  setupController(controller) {
    this._super(...arguments);
    controller.set('errors', null);
  },

  actions: {
    getTax(model) {
      const transaction = this.store.createRecord('transaction', _.extend(model, {
        companyCode: this.modelFor('company').get('companyCode'),
        type: 'SalesInvoice',
        lines: [{
          number: 1,
          amount: model.amount,
        }],
      }));

      return transaction
        .save()
        .then(() => {
          this.transitionTo('transactions.transaction', transaction);
        }, () => {
          this.controller.set('errors', transaction.get('errors'));
        });
    },
  },
});
