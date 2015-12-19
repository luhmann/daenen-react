module.exports = {
  'homepage elements present': function(browser) {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('[data-e2e="layout"]', 1000);

    browser.expect.element('[data-e2e="header"]').to.be.present;
    browser.expect.element('[data-e2e="footer"]').to.be.present;

    browser.expect.element('[data-e2e="project"]').to.have.length(8);

    browser.end();
  },

  // 'step two': function(browser) {
  //   browser
  //     .assert.elementPresent('.ns-LinkTo--widgets')
  //     .waitForElementVisible('.ns-LinkTo--widget', 1000)
  //     .click('.ns-LinkTo--widget')
  //     .pause(200)
  //     .assert.containsText('h1', 'Widget WD1')
  //     .end();
  // },
};
