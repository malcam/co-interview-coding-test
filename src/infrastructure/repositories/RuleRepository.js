const fakeDatabase = require('../assets/fake-product-rules-database.json');
const RuleFactory = require('../../domain/rules/RuleFactory');

class RuleRepository {
  constructor() {
    this.source = fakeDatabase;
  }

  byName(name) {
    // TODO: improve it
    let collection = null;
    this.source.database.forEach((element) => {
      if (name === element.productName) {
        collection = element.rules;
      }
    });

    const factory = new RuleFactory();
    const parseRules = [];

    collection.forEach((rule) => {
      const myRule = factory.make(rule.name, rule);
      if (myRule !== null) {
        parseRules.push(myRule);
      }
    });

    return parseRules;
  }
}

module.exports = RuleRepository;
