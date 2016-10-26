var url = 'http://staging.konga.com/customer/account/login/?redirect=polo-ralph-lauren-mens-maykn-fashion-sneakers-dark-indigo-polo-tan-2632682';

module.exports = {
    'validate that users can login successfully': function(client) {
        client
            .url(url)
            .waitForElementVisible('body', 5000);
        client.setValue('#username', 'kongaqa@example.com');
        client.setValue('#pass', 'killer');
        client.saveScreenshot('test/screenshots/login_page.png');
        client.assert.urlEquals(url);
        client.expect.element('#username').to.be.present;
        client.expect.element('#pass').to.be.present;
        client.expect.element('button[name=send]').to.be.present;
        client.click('button[name=send]');
    },


     'validate that user cannot add to cart without selecting shoe size': function(client) {
        client
             .waitForElementVisible('body', 8000);
        client.assert.urlEquals('http://staging.konga.com/polo-ralph-lauren-mens-maykn-fashion-sneakers-dark-indigo-polo-tan-2632682');
         client.expect.element('button.btn.btn-default.add-to-cart.button').to.be.present;
         client.click('button.btn.btn-default.add-to-cart.button');
         client.assert.containsText('div.error-cart','Please select a shoe_size');
         client.saveScreenshot('test/screenshots/product_details_page.png');
     },


    'validate that user can add to cart after selecting shoe size': function(client) {
        client
        client.expect.element('select.config-options.options-select.shoe_size').to.be.present;
        client.click('select.config-options.options-select.shoe_size')
            .pause(1000)
            .click('option[value="763"]');
        client.click('button.btn.btn-default.add-to-cart.button');
        client.pause(5000);
        client.saveScreenshot('test/screenshots/product_details_page_2.png');
    },


    'validate that user can proceed to checkout': function(client) {
        client
            .waitForElementVisible('body', 8000);
        client.pause(1000);
        client.assert.title('Shopping Cart | Konga Nigeria');
        client.assert.urlEquals('http://staging.konga.com/checkout/cart');
        client.expect.element('.span3.top.cart-sidebar button.button.btn-proceed-checkout.btn-checkout').to.be.present;
        client.click('.span3.top.cart-sidebar button.button.btn-proceed-checkout.btn-checkout');
        client.pause(8000);
        client.saveScreenshot('test/screenshots/checkout_page.png');
    },


        "validate that user can place order ": function(client) {
         client
             .waitForElementVisible('body', 1000);
            client.pause(1000);
            client.assert.title('Checkout | Konga Nigeria');
            client.assert.urlEquals('http://staging.konga.com/checkout/onepage/');
            client.expect.element('#confirm_payment').to.be.present;
            client.click('#confirm_payment');
            client.pause(8000);
            client.saveScreenshot('test/screenshots/place_order.png');
     },



    "validate that success page is displayed ": function(client) {
        client
            .waitForElementVisible('body', 1000);
        client.pause(1000);
        client.assert.title('Online Shopping | Phones, Electronics, Fashion');
        client.assert.urlEquals('http://staging.konga.com/checkout/onepage/success/');
        client.assert.containsText('div.center','Thanks for your order!');
        client.pause(8000);
        client.saveScreenshot('test/screenshots/success_page.png');
    },

};
