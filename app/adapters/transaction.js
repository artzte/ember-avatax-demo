import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  isCompanyRoute: true,
  postSingleton: true,
  _getPrefix(snapshot, query) {
    const companyCode = snapshot && snapshot.attr('companyCode') || query && query.companyCode;

    if (!companyCode) {
      throw new Error('needs company code');
    }

    return `companies/${companyCode}`;
  },
  urlForCreateRecord() {
    return `/${this.namespace}/transactions/create`;
  },
});
