// eslint-disable-next-line no-unused-vars
const Product = require('../model/Product');

class EndOfDay {
  /**
   * Apply this rule
   * @param {Product} item
   * @return {boolean} if the rule was applied
   */
  apply(item) {
    item.goToNextDay();
    return true;
  }
}

module.exports = EndOfDay;
