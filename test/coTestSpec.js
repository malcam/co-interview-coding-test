/* eslint-disable prefer-arrow-callback, func-names */
const { expect } = require('chai');
const { collectValues } = require('./assets/utils');
const { expectProductLike, expectProductInDayLike } = require('./helpers');
const RuleFactory = require('../src/domain/rules/RuleFactory');
const RuleRunner = require('../src/domain/rules/RuleRunner');

const CarInsurance = require('../src/application/services/CarInsurance');
const Product = require('../src/domain/model/Product');

describe('Co Test', function () {
  context('when name is Medium Coverage', function () {
    before(function () {
      this.data = require('./assets/medium-coverage-data.json');
      Object.assign(this, collectValues(this.data));
    });

    beforeEach(function () {
      this.carInsurance = new CarInsurance(
        [new Product(this.productName, this.initialSellIn, this.initialPrice)],
      );
    });

    it('should return the same values', function () {
      this.data.days.forEach((element) => {
        const products = this.carInsurance.updatePrice();

        expectProductLike(products[0])
          .toHaveEqualValuesAs(
            { name: this.productName, sellIn: element.values.sellIn, price: element.values.price },
          );
      });
    });
  });

  context('when name is Full Coverage', function () {
    before(function () {
      this.data = require('./assets/full-coverage-data.json');
      Object.assign(this, collectValues(this.data));
    });

    beforeEach(function () {
      this.carInsurance = new CarInsurance(
        [new Product(this.productName, this.initialSellIn, this.initialPrice)],
      );
    });

    it('should return the same values', function () {
      this.data.days.forEach((element) => {
        const products = this.carInsurance.updatePrice();

        expectProductLike(products[0])
          .toHaveEqualValuesAs(
            { name: this.productName, sellIn: element.values.sellIn, price: element.values.price },
          );
      });
    });
  });

  context('when name is Low Coverage', function () {
    before(function () {
      this.data = require('./assets/low-coverage-data.json');
      Object.assign(this, collectValues(this.data));
    });

    beforeEach(function () {
      this.carInsurance = new CarInsurance(
        [new Product(this.productName, this.initialSellIn, this.initialPrice)],
      );
    });

    it('should return the same values', function () {
      this.data.days.forEach((element) => {
        const products = this.carInsurance.updatePrice();

        expectProductLike(products[0])
          .toHaveEqualValuesAs(
            { name: this.productName, sellIn: element.values.sellIn, price: element.values.price },
          );
      });
    });
  });

  context('when name is Special Full Coverage', function () {
    before(function () {
      this.data = require('./assets/special-full-coverage.json');
      Object.assign(this, collectValues(this.data));
    });

    beforeEach(function () {
      this.carInsurance = new CarInsurance(
        [new Product(this.productName, this.initialSellIn, this.initialPrice)],
      );
    });

    it('should return the same values', function () {
      for (let i = 0, element = this.data.days[i]; i < 30; i++) {
        const products = this.carInsurance.updatePrice();

        if (typeof element !== 'undefined' && element.day === i + 1) {
          expectProductLike(products[0])
            .toHaveEqualValuesAs(
              { name: this.data.name, sellIn: element.values.sellIn, price: element.values.price },
            );
        }
      }
    });

    it('should return in day 23', function () {
      const day = 23;
      const element = this.data.days.find((item) => item.day === day);

      if (typeof element === 'undefined') {
        throw new Error('Day not found in dataset');
      }

      expectProductInDayLike(this.carInsurance, day, this.data.days)
        .toHaveEqualValues(
          { name: this.productName, sellIn: element.values.sellIn, price: element.values.price },
        );
    });

    it('should return in day 29', function () {
      const day = 29;
      const element = this.data.days.find((item) => item.day === day);

      if (typeof element === 'undefined') {
        throw new Error('Day not found in dataset');
      }

      expectProductInDayLike(this.carInsurance, day, this.data.days)
        .toHaveEqualValues(
          { name: this.productName, sellIn: element.values.sellIn, price: element.values.price },
        );
    });
  });

  context('when name apply a rule', function () {
    before(function () {
      this.data = require('./assets/low-coverage-data.json');
      Object.assign(this, collectValues(this.data));
    });

    beforeEach(function () {
      this.product = new Product(this.productName, this.initialSellIn, this.initialPrice);
      this.carInsurance = new CarInsurance(
        [new Product(this.productName, this.initialSellIn, this.initialPrice)],
      );
    });

    it('should apply the rule', function () {
      const factory = new RuleFactory();
      const endOfDayRule = factory.make('EndOfDay');
      const degradePriceBy = factory.make('DegradePriceBy', {
        amount: 1,
        conditions: [
          { whenSellInIsLessThat: 0 },
        ],
      });

      const beforePrice = this.product.price;
      const beforeSellIn = this.product.sellIn;

      const runner = new RuleRunner();
      runner.run(this.product, [endOfDayRule, degradePriceBy]);

      expect(this.product.sellIn).to.equal(beforeSellIn - 1);
      expect(this.product.price).to.equal(beforePrice - 2);
    });
  });
});
