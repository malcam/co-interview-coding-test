const { expect } = require('chai');

const expectProductLike = (product) => ({
  toHaveNameAs: (expectation) => {
    expect(product.name).to.equal(expectation.name);
  },
  toHaveSellInAs: (expectation) => {
    expect(product.sellIn).to.equal(expectation.sellIn);
  },
  toHavePriceAs: (expectation) => {
    expect(product.price).to.equal(expectation.price);
  },
  toHaveEqualValuesAs: (expectation) => {
    expect(product.name).to.equal(expectation.name);
    expect(product.sellIn).to.equal(expectation.sellIn);
    expect(product.price).to.equal(expectation.price);
  },
});

const expectProductInDayLike = (updateService, aDay, dayList) => ({
  toHaveEqualValues: (expectation) => {
    for (let i = 0, element = dayList[i]; i < 30; i++) {
      const products = updateService.updatePrice();

      if (typeof element !== 'undefined' && element.day === aDay) {
        expectProductLike(products[0]).toHaveEqualValuesAs(expectation);
      }
    }
  },
});

module.exports = {
  expectProductLike,
  expectProductInDayLike,
};
