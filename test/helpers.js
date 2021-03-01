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

const expectProductInDayLike = (updateService, aDay) => ({
  toHaveEqualValues: (expectation) => {
    for (let i = 1; i <= 30; i++) {
      const products = updateService.updatePrice();

      if (aDay === i) {
        expectProductLike(products[0]).toHaveEqualValuesAs(expectation);
        break;
      }
    }
  },
});

const expectProductInDayListLike = (updateService, dayList) => ({
  toHaveEqualValues: (expectation) => {
    for (let i = 1; i <= 30; i++) {
      const products = updateService.updatePrice();
      const element = dayList.find((item) => item.day === i);

      if (typeof element !== 'undefined') {
        expectProductLike(products[0]).toHaveEqualValuesAs(
          { name: expectation.name, sellIn: element.values.sellIn, price: element.values.price },
        );
      }
    }
  },
});

module.exports = {
  expectProductLike,
  expectProductInDayLike,
  expectProductInDayListLike,
};
