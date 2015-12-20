module.exports = {
  tags: ['basic'],
  'Opening home works and expected elements are present': function(browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('[data-e2e="layout"]', 1000);

    browser.expect.element('[data-e2e="header"]').to.be.present;
    browser.expect.element('[data-e2e="content"]').to.be.present;
    browser.expect.element('[data-e2e="footer"]').to.be.present;

    browser.elements('css selector', '[data-e2e="dev"]', function(results) {
      this.assert.equal(results.value.length, 2, 'should contain two developer elements');
    });

    browser.elements('css selector', '[data-e2e="project"]', function(results) {
      this.assert.equal(results.value.length, 8, 'should contain eight project elements');
    });
  },

  'Expanding project list works': function(browser) {
    browser.click('[data-e2e="more"]');
    browser.elements('css selector', '[data-e2e="project"]', function(results) {
      this.assert.equal(results.value.length > 8, true, 'expansion of elements should work');
    });
  },

  'Getting to impress page works and shows info': function(browser) {
    browser.expect.element('[data-e2e="impress-link"]').to.be.present;
    browser.click('[data-e2e="impress-link"]');
    browser.waitForElementVisible('[data-e2e="impress"]', 1000);
    browser.expect.element('[data-e2e="ust"]').to.be.present;
  },

  'Getting from impress page back to homepage works': function(browser) {
    browser.click('[data-e2e="header"]');
    browser.waitForElementVisible('[data-e2e="content"]', 1000);
  },

  'Directly opening impress page works': function(browser) {
    browser
      .url('http://localhost:3000/impress')
      .waitForElementVisible('[data-e2e="impress"]', 1000);

    browser.expect.element('[data-e2e="ust"]').to.be.present;
  },
};
