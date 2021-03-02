class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  increasePriceBy(number) {
    if (this.price + number > 50) {
      throw new Error('The price of a product is never more than 50');
    }
    this.price += number;
  }

  decreasePriceBy(number) {
    if (this.price - number < 0) {
      throw new Error('The price of a product is never negative');
    }
    this.price -= number;
  }

  decreaseSellInBy(number) {
    this.sellIn -= number;
  }

  invalidate() {
    this.price = 0;
  }

  canDecreasePrice() {
    return this.price > 0;
  }

  canUpgradePrice(amount) {
    return this.price + amount <= 50;
  }

  goToNextDay() {
    this.decreaseSellInBy(1);
    if (this.canDecreasePrice()) this.decreasePriceBy(1);
  }
}

module.exports = Product;
