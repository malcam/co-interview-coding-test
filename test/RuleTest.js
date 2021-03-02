/* eslint-disable prefer-arrow-callback, func-names */
const { expect } = require('chai');
const RuleFactory = require('../src/domain/rules/RuleFactory');

describe('Rule Test', function () {
  context('when rule UpgradePriceBy', function () {
    before(function () {
      this.factory = new RuleFactory();
    });

    it('when amount is less that 0 should throw error', function () {
      expect(() => this.factory.make('UpgradePriceBy', { amount: 0 })).to.throw('Unexpected amount value');
    });

    it('when amount is undefined should throw error', function () {
      expect(() => this.factory.make('UpgradePriceBy', {})).to.throw('Unexpected amount value');
    });
  });

  context('when rule DegradePriceBy', function () {
    before(function () {
      this.factory = new RuleFactory();
      this.error = 'Unexpected amount value';
    });

    it('when amount is less that 0 should throw error', function () {
      expect(() => this.factory.make('DegradePriceBy', { amount: 0 })).to.throw(this.error);
    });

    it('when amount is undefined should throw error', function () {
      expect(() => this.factory.make('DegradePriceBy', {})).to.throw(this.error);
    });
  });
});
