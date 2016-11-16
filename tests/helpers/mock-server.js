import ServerFactory from './server-factory';
import transactionComputed from '../fixtures/transaction-computed';
import companies from '../fixtures/companies';
import nexus from '../fixtures/nexus';

const transactions = [
  transactionComputed,
];

export default class AvaServerFactory extends ServerFactory {
  constructor() {
    super();

    this.addResource({
      fixtures: {
        transactions,
        nexus,
        companies,
      },
      mapping: function() {
        var self = this;

        return function() {
          this.get('/api/v2/companies', function() {
            const fixture = self.getFixture('companies');
            return self.respondWithJson(self.apiListResult(fixture));
          });

          this.get('/api/v2/companies/:companyId', function() {
            const fixture = self.getFixture('companies');
            return self.respondWithJson(fixture[0]);
          });

          this.get('/api/v2/companies/:companyId/nexus', function() {
            const fixture = self.getFixture('companies');
            return self.respondWithJson(self.apiListResult(fixture));
          });

          this.get('/api/v2/companies/:companyCode/transactions', function() {
            const fixture = self.getFixture('transactions');
            return self.respondWithJson(self.apiListResult(fixture));
          });

          this.post('/api/v2/transactions', function() {
            const fixture = self.getFixture('transactions')[0];
            return self.respondWithJson(fixture);
          });
        };
      },
    });
  }
  apiListResult(fixtures) {
    const result = {
      value: fixtures,
    };

    result['@recordsetCount'] = fixtures.length;
    return result;
  }
}
