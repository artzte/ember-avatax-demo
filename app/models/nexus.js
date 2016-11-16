import DS from 'ember-data';

export default DS.Model.extend({
  company: DS.belongsTo('company'),
  country: DS.attr('string'),
  region: DS.attr('string'),
  jurisName: DS.attr('string'),
  jurisCode: DS.attr('string'),
  jurisTypeId: DS.attr('string'),
});
