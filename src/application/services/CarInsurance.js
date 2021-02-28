class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice() {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].name != 'Full Coverage' && this.products[i].name != 'Special Full Coverage') {
        if (this.products[i].price > 0) {
          if (this.products[i].name != 'Mega Coverage') {
            this.products[i].decreasePriceBy(1);
          }
        }
      } else if (this.products[i].price < 50) {
        this.products[i].increasePriceBy(1);
        if (this.products[i].name == 'Special Full Coverage') {
          this.specialFullCoverageRules(this.products[i]);
        }
      }
      if (this.products[i].name != 'Mega Coverage') {
        this.products[i].decreaseSellInBy(1);
      }
      if (this.products[i].sellIn < 0) {
        if (this.products[i].name != 'Full Coverage') {
          if (this.products[i].name != 'Special Full Coverage') {
            if (this.products[i].price > 0) {
              if (this.products[i].name != 'Mega Coverage') {
                this.products[i].decreasePriceBy(1);
              }
            }
          } else {
            this.products[i].price = this.products[i].price - this.products[i].price;
          }
        } else if (this.products[i].price < 50) {
          // this.products[i].price = this.products[i].price + 1;
          this.products[i].increasePriceBy(1);
        }
      }
    }

    return this.products;
  }

  specialFullCoverageRules(product) {
    if (product.sellIn < 11) {
      if (product.price < 50) {
        product.increasePriceBy(1);
      }
    }
    if (product.sellIn < 6) {
      if (product.price < 50) {
        product.increasePriceBy(1);
      }
    }
  }
}

module.exports = CarInsurance;
