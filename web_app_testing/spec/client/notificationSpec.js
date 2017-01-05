const browserContext = require('../../spec/helpers/client').browserContext;

const contextOptions = {
  scripts: ['./app/public/javascripts/notification.js']
};

describe('FormValidator', () => {

  describe('showing errors on fields', () => {

    it('invalid message for email', (done) => {

      contextOptions.html = './spec/client/fixtures/notification/form.html';
      browserContext(contextOptions, done, (window, document) => {
        var notification = new window.Notification();
        notification.init();
        notification.showErrors({'email': ['email.invalid', 'email.duplicated']});

        var span = document.getElementsByTagName('span')[0];
        expect(span.getAttribute('class')).toEqual('field-error');
        expect(span.getAttribute('id')).toEqual('email-error');
        expect(span.innerHTML).toEqual('email.invalid, email.duplicated');
      });
    });
  });

});

