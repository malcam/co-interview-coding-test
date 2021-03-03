/**
 * Collect initial data
 *
 * @param  {Object} data
 * @return {Object}
 */
function collectValues(data) {
  // TODO: Add validation
  return {
    productName: data.name,
    initialSellIn: data.initialValues.sellIn,
    initialPrice: data.initialValues.price,
  };
}

module.exports = {
  collectValues,
};
