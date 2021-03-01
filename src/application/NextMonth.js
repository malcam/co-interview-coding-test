const RuleRunner = require('../domain/rules/RuleRunner');
// eslint-disable-next-line no-unused-vars
const Product = require('../domain/model/Product');

class NextMonth {
  constructor(ruleRepository) {
    this.repository = ruleRepository;
  }

  /**
   * Apply this rule
   * @param {Object} command
   * @return {Product} the result value.
   */
  process(command) {
    const runner = new RuleRunner();
    const product = new Product(command.name, command.sellIn, command.price);
    const ruleset = this.repository.byName(command.name);

    for (let i = 0; i < 30; i++) {
      runner.run(product, ruleset);
    }

    return product;
  }
}

module.exports = NextMonth;
