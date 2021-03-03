const Product = require('../../src/domain/model/Product');
const NextMonthCommand = require('../../src/application/NextMonthCommand');
const NextMonthService = require('../../src/application/NextMonth');
const RuleRepository = require('../../src/infrastructure/repositories/RuleRepository');

const productsAtDayZero = [
  new Product('Medium Coverage', 10, 20),
  new Product('Full Coverage', 2, 0),
  new Product('Low Coverage', 5, 7),
  new Product('Mega Coverage', 0, 80),
  new Product('Mega Coverage', -1, 80),
  new Product('Special Full Coverage', 15, 20),
  new Product('Special Full Coverage', 10, 49),
  new Product('Special Full Coverage', 5, 49),
  new Product('Super Sale', 3, 6),
];

const productPrinter = function (product) {
  console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
};

const ruleRepository = new RuleRepository();
const nextMonthService = new NextMonthService(ruleRepository);

const productBag = [];

productsAtDayZero.forEach((element) => {
  const command = new NextMonthCommand(element);
  productBag.push(nextMonthService.process(command));
});

// NOTE: know bug in Full Coverage
console.log('Day 30');
console.log('name, sellIn, price');
productBag.forEach(productPrinter);
console.log('');
