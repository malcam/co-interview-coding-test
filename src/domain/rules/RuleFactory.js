// eslint-disable-next-line no-unused-vars
const EndOfDay = require('./EndOfDay');
const DegradePriceBy = require('./DegradePriceBy');
const UpgradePriceBy = require('./UpgradePriceBy');
const NoMoreDays = require('./NoMoreDays');
const InverseEndOfDay = require('./InverseEndOfDay');

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
      case 'InverseEndOfDay': {
        myRule = new InverseEndOfDay(params);
        break;
      }
      case 'DegradePriceBy': {
        myRule = new DegradePriceBy(params.amount, params.conditions);
        break;
      }

      case 'UpgradePriceBy': {
        myRule = new UpgradePriceBy(params.amount, params.conditions);
        break;
      }

      case 'NoMoreDays': {
        myRule = new NoMoreDays();
        break;
      }

      default:
        break;
    }

    return myRule;
  }
}

module.exports = RuleFactory;
