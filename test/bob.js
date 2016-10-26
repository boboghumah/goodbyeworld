var url = 'http://127.0.0.1:8081/';

module.exports = {
    'home page requires a firstname field': function(client) {
        client
            .url(url)
            .waitForElementVisible('body', 1000);
        client.saveScreenshot('test/screenshots/home_page.png');
        client.assert.urlEquals(url);
        client.expect.element('#first_name').to.be.present;
    },

    'home page requires a last name field': function(client) {
        client
            .url(url + 'index.html')
            .waitForElementVisible('body', 1000);
        client.setValue('#first_name', 'Bob');
        client.saveScreenshot('test/screenshots/home_page_with_content.png');
        client.assert.urlEquals(url + 'index.html');
        client.expect.element('#last_name').to.be.present;
    },

    "home page requires a submit button": function(client) {
        client
            .url(url + 'index.html')
            .waitForElementVisible('body', 1000);
        client.expect.element('#submit').to.be.present;
        //client.expect.element('input[name=submit]').to.be.present;

    }
};
