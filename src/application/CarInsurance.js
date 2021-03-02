const RuleRunner = require('../domain/rules/RuleRunner');
const LegacyCarInsurance = require('./LegacyCarInsurance');

class CarInsurance {
  constructor(products = [], ruleRepository) {
    this.products = products;
    this.repository = ruleRepository;
    this.version = 1;
  }

  changeVersion(version) {
    this.version = version;
  }

  updatePrice() {
    const runner = new RuleRunner();

    for (let i = 0; i < this.products.length; i++) {
      if (this.version === 2) {
        const ruleset = this.repository.byName(this.products[i].name);
        runner.run(this.products[i], ruleset);
      } else {
        const legacyCar = new LegacyCarInsurance();
        legacyCar.updateProductPrice(this.products[i]);
      }
    }

    return this.products;
  }
}

module.exports = CarInsurance;
