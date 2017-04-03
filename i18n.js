const i18n = require('i18n');

i18n.configure({

  // specify the locales our application supports
  locales: ['es', 'it', 'en-US'],

  // where to find our translation files
  directory: __dirname + '/locales',
  
  // default locale to display the app in
  defaultLocale: 'en-US',

  // rename the __ API method to 'translate'
  api: {
    '__': 'translate',
  },

  // query parameter to switch locale (ie. /home?lang=ch) - defaults to NULL
  queryParameter: 'lang',
});

module.exports = function(req, res, next) {

  // initialize the i18n library
  i18n.init(req, res);

  return next();
};