// eslint-disable-next-line no-unused-vars
const Product = require('../model/Product');

class NoMoreDays {
  /**
   * Apply this rule
   * @param {Product} item
   * @return {boolean} if the rule was applied
   */
  apply(item) {
    let isPlayable = false;
    if (item.sellIn < 0) isPlayable = true;

    if (isPlayable) item.invalidate();

    return isPlayable;
  }
}

module.exports = NoMoreDays;
