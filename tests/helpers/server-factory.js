import _ from 'npm:underscore';
import Pretender from 'pretender';

export function deepClone(json) {
  return JSON.parse(JSON.stringify(json));
}

export default class ServerFactory {
  constructor() {
    this.maps = [];
    this.fixtures = {};
  }

  addResource(resource) {
    if (resource.fixtures) {
      _.extend(this.fixtures, deepClone(resource.fixtures));
    }

    if (resource.mapping) {
      this.maps.push(resource.mapping);
    }
  }

  createServer() {
    var server = new Pretender();

    this.maps.forEach((mapBuilder) => {
      server.map(mapBuilder.apply(this));
    });

    return server;
  }

  getFixture(fixtureType, findWhereOptions) {
    const fixture = this.fixtures[fixtureType];

    if (!fixture) {
      throw(new Error(`No fixture ${fixtureType} has been defined`));
    }

    // if no filter options
    if (arguments.length === 1) {
      return fixture;
    }

    if (!Array.isArray(fixture)) {
      throw(new Error(`Retrieving ${fixtureType} via index requires a list fixture`));
    }

    const reference = _.findWhere(fixture, findWhereOptions);
    if (reference === undefined) {
      const criteria = JSON.stringify(findWhereOptions);
      throw(new Error(`Found no item for ${fixtureType} using criteria ${criteria}`));
    }

    return reference;
  }

  respondWithJson(payload, options = {}) {
    const responseBody = typeof(payload) === 'string' ? payload : JSON.stringify(payload);
    return [options.statusCode || 200, {
      'Content-Type': 'application/json',
    }, responseBody];
  }

  respondWithStatusOnly(statusCode) {
    return [statusCode || 200, {}, ''];
  }
}

