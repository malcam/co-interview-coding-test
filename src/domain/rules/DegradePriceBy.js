// eslint-disable-next-line no-unused-vars
const Product = require('../model/Product');

class DegradePriceBy {
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

    this.conditions.forEach((conditionList) => {
      // eslint-disable-next-line dot-notation
      if (typeof conditionList['whenSellInIsLessThat'] !== 'undefined') {
        if (item.sellIn < conditionList.whenSellInIsLessThat) isPlayable = true;
      }
    });

    if (isPlayable) item.decreasePriceBy(this.ammount);

    return isPlayable;
  }
}

module.exports = DegradePriceBy;
