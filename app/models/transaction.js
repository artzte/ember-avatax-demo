import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  company: DS.belongsTo('company'),

  // required outbound attributes
  date: attr('date'),
  type: attr('string', {default: 'SalesInvoice'}),

  companyCode: attr('string', {defaultValue: 'DEFAULT'}),
  customerCode: attr('string'),
  currencyCode: attr('string', {defaultValue: 'USD'}),

  addresses: attr({
    defaultValue() {
      return {
        SingleLocation: {
          line1: '1100 3rd Avenue',
          city: 'Seattle',
          region: 'WA',
          country: 'US',
          postalCode: '98101',
        },
      };
    },
  }),
  lines: attr({
    defaultValue() {
      return [{
        number: 1,
        amount: 100,
      }];
    },
  }),

  // inbound attributes
  code: attr('string'),
  customerVendorCode: attr('string'),
  totalAmount: attr('number'),
  totalTax: attr('number'),
  taxDate: attr('date'),
});
