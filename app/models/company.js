import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
  name: attr('string'),
  companyCode: attr('string'),
  nexus: DS.hasMany('nexus'),
  transactions: DS.hasMany('transaction'),
});
