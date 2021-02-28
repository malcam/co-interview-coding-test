// eslint-disable-next-line no-unused-vars
const Product = require('../model/Product');

class UpgradePriceBy {
  /**
   * Apply this rule
   * @param {Product} item
   * @return {number} the result value.
   */
  apply(item) {
    item.increasePriceBy(1);
  }
}

module.exports = UpgradePriceBy;
