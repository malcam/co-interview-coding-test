// eslint-disable-next-line no-unused-vars
const Product = require('../model/Product');

class InverseEndOfDay {
  /**
   * Apply this rule
   * @param {Product} item
   * @return {boolean} if the rule was applied
   */
  apply(item) {
    item.decreaseSellInBy(1);
    if (item.canUpgradePrice(1)) item.increasePriceBy(1);
    return true;
  }
}

module.exports = InverseEndOfDay;
