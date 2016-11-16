import { test } from 'qunit';
import moduleForAcceptance from 'avatax-demo/tests/helpers/module-for-acceptance';
import MockServer from '../helpers/mock-server';

let mock;
let server;
let requests;

moduleForAcceptance('Acceptance | transactions', {
  beforeEach(assert) {
    requests = [];
    mock = new MockServer();
    server = mock.createServer();

    server.handledRequest = function(verb, path, request) {
      // ignore non-transactions requests
      if (!/transactions/.test(path)) {
        return;
      }

      // shows trace, allows checking for assertion counts
      assert.ok(true, path);

      // store request for inspection
      requests.push(request);
    };
  },
  afterEach() {
    server.shutdown();
  },
});

test('visiting /transactions', function(assert) {
  assert.expect(6);

  const url = '/c/1/transactions';
  visit(url);

  andThen(function() {
    assert.equal(currentURL(), url);

    const count = find('.at-txn-count');

    // check dom
    assert.ok(/1/.test(count.text()), 'Only one transaction');

    // check requests
    assert.equal(1, requests.length, 'One fetch to transactions occurred');
    assert.equal(requests[0].method, 'GET');
    assert.ok(/\/api\/v2\/companies\/EMBERCO\/transactions/.test(requests[0].url) );
  });
});
