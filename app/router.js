import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('companies', {
    path: 'c',
  }, function() {
    this.route('company', {
      path: ':companyCode',
      resetNamespace: true,
    }, function() {
      this.route('transactions', {
        resetNamespace: true,
        path: 'transactions',
      }, function() {
        this.route('new');
        this.route('transaction', {
          path: ':code',
        });
      });
    });
  });
});

export default Router;
