// eslint-disable-next-line no-unused-vars
const Product = require('../model/Product');

class NoMoreDays {
  /**
   * Apply this rule
   * @param {Product} item
   * @return {boolean} if the rule was applied
   */
  apply(item) {
    // FIXME: no-param-reassign
    item.price = 0;

    return true;
  }
}

module.exports = NoMoreDays;
