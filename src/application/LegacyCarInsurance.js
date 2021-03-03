class LegacyCarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice() {
    for (let i = 0; i < this.products.length; i++) {
      this.updateProductPrice(this.products[i]);
    }

    return this.products;
  }

  updateProductPrice(currentProduct) {
    if (currentProduct.name != 'Full Coverage' && currentProduct.name != 'Special Full Coverage') {
      if (currentProduct.price > 0 && currentProduct.name != 'Mega Coverage') {
        currentProduct.decreasePriceBy(1);
      }
    } else if (currentProduct.price < 50) {
      currentProduct.increasePriceBy(1);
      if (currentProduct.name == 'Special Full Coverage') {
        this.specialFullCoverageRules(currentProduct);
      }
    }
    if (currentProduct.name != 'Mega Coverage') {
      currentProduct.decreaseSellInBy(1);
    }
    if (currentProduct.sellIn < 0) {
      if (currentProduct.name != 'Full Coverage') {
        if (currentProduct.name != 'Special Full Coverage') {
          if (currentProduct.price > 0 && currentProduct.name != 'Mega Coverage') {
            currentProduct.decreasePriceBy(1);
          }
        } else {
          // currentProduct.price = currentProduct.price - currentProduct.price;
          currentProduct.invalidate();
        }
      } else if (currentProduct.price < 50) {
        currentProduct.increasePriceBy(1);
      }
    }

    return currentProduct;
  }

  specialFullCoverageRules(product) {
    // TODO: add getters
    if (product.price >= 50) {
      return false;
    }

    if (product.sellIn < 11) {
      product.increasePriceBy(1);
    }
    if (product.sellIn < 6) {
      product.increasePriceBy(1);
    }

    return true;
  }
}

module.exports = LegacyCarInsurance;
