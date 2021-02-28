class RuleRunner {
  run(item, ruleSet) {
    ruleSet.forEach((rule) => {
      rule.apply(item);
    });
  }
}

module.exports = RuleRunner;
