// eslint-disable-next-line no-unused-vars
const EndOfDay = require('./EndOfDay');
const DegradePriceBy = require('./DegradePriceBy');

class RuleFactory {
  /**
   * Get a fresh rule by name
   * @param {string} ruleName
   * @return {Object} the rule.
   */
  make(ruleName, params) {
    let myRule = null;
    switch (ruleName) {
      case 'EndOfDay': {
        myRule = new EndOfDay(params);
        break;
      }
      case 'DegradePriceBy': {
        myRule = new DegradePriceBy(params.amount, params.conditions);
        break;
      }

      default:
        break;
    }

    return myRule;
  }
}

module.exports = RuleFactory;
