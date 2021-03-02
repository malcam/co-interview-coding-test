// eslint-disable-next-line no-unused-vars
const Product = require('../model/Product');

class DegradePriceBy {
  constructor(amount, conditions) {
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error('Unexpected amount value');
    }
    this.amount = amount;
    this.conditions = conditions;
  }

  /**
   * Apply this rule
   * @param {Object} item
   * @return {number} the result value.
   */
  apply(item) {
    let isPlayable = false;

    if (!item.canDecreasePrice()) {
      return isPlayable;
    }

    this.conditions.forEach((conditionList) => {
      // eslint-disable-next-line dot-notation
      if (typeof conditionList['whenSellInIsLessThat'] !== 'undefined') {
        if (item.sellIn < conditionList.whenSellInIsLessThat) isPlayable = true;
      }
    });

    if (isPlayable) item.decreasePriceBy(this.amount);

    return isPlayable;
  }
}

module.exports = DegradePriceBy;
