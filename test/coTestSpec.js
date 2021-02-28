/* eslint-disable prefer-arrow-callback */
const { expect } = require('chai');

const CarInsurance = require('../src/application/services/CarInsurance');
const Product = require('../src/domain/model/Product');

describe('Co Test', function () {
  context('when name is Medium Coverage', function () {
    const data = require('./assets/medium-coverage-data.json');

    const { name } = data;
    const initialSellIn = data.initialValues.sellIn;
    const initialPrice = data.initialValues.price;

    it('should return the same values', function () {
      const carInsurance = new CarInsurance([new Product(name, initialSellIn, initialPrice)]);

      data.days.forEach((element) => {
        const products = carInsurance.updatePrice();

        expect(products[0].name).to.equal(data.name);
        expect(products[0].sellIn).to.equal(element.values.sellIn);
        expect(products[0].price).to.equal(element.values.price);
      });
    });
  });

  context('when name is Full Coverage', function () {
    const data = require('./assets/full-coverage-data.json');

    const { name } = data;
    const initialSellIn = data.initialValues.sellIn;
    const initialPrice = data.initialValues.price;

    it('should return the same values', function () {
      const carInsurance = new CarInsurance([new Product(name, initialSellIn, initialPrice)]);

      data.days.forEach((element) => {
        const products = carInsurance.updatePrice();

        expect(products[0].name).to.equal(data.name);
        expect(products[0].sellIn).to.equal(element.values.sellIn);
        expect(products[0].price).to.equal(element.values.price);
      });
    });
  });

  context('when name is Low Coverage', function () {
    const data = require('./assets/low-coverage-data.json');

    const { name } = data;
    const initialSellIn = data.initialValues.sellIn;
    const initialPrice = data.initialValues.price;

    it('should return the same values', function () {
      const carInsurance = new CarInsurance([new Product(name, initialSellIn, initialPrice)]);

      data.days.forEach((element) => {
        const products = carInsurance.updatePrice();

        expect(products[0].name).to.equal(data.name);
        expect(products[0].sellIn).to.equal(element.values.sellIn);
        expect(products[0].price).to.equal(element.values.price);
      });
    });
  });
});