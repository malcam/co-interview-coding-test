class DecreaseByOneRule {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  increasePriceBy(number) {
    this.price += number;
  }

  decreasePriceBy(number) {
    this.price -= number;
  }

  decreaseSellInBy(number) {
    this.sellIn -= number;
  }

  invalidate() {
    this.price = 0;
  }
}

module.exports = DecreaseByOneRule;
