// eslint-disable-next-line no-unused-vars
const Product = require('../model/Product');

class UpgradePriceBy {
  constructor(amount, conditions) {
    this.ammount = amount;
    this.conditions = conditions;
  }

  /**
   * Apply this rule
   * @param {Product} item
   * @return {number} the result value.
   */
  apply(item) {
    let isPlayable = false;

    if (!item.canUpgradePrice(this.amount)) {
      return isPlayable;
    }

    this.conditions.forEach((conditionList) => {
      // eslint-disable-next-line dot-notation
      if (typeof conditionList['whenSellInIsLessThat'] !== 'undefined') {
        if (item.sellIn < conditionList.whenSellInIsLessThat) isPlayable = true;
      }

      // eslint-disable-next-line dot-notation
      if (typeof conditionList['whenPriceIsLessThan'] !== 'undefined') {
        if (item.price < conditionList.whenPriceIsLessThan) isPlayable = true;
      }

      // eslint-disable-next-line dot-notation
      if (typeof conditionList['whenSellInIsGreaterThat'] !== 'undefined') {
        if (item.sellIn > conditionList.whenSellInIsGreaterThat) isPlayable = true;
      }
    });

    if (isPlayable) item.increasePriceBy(this.ammount);

    return isPlayable;
  }
}

module.exports = UpgradePriceBy;
