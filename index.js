const express = require('express');
const app = express();
const i18n = require('./i18n.js');

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Localize';

app.use(i18n);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  let acceptedLocales = req.header('Accept-Language');
  // res.send(`Locales: ${acceptedLocales}`);
  
res.render('index.ejs');
});

if (!module.parent) {
  app.listen(app.get('port'), () => {
    console.log(`${app.locals.title} is running on ${app.get('port')}.`);
  });
}

module.exports = app;






























// app.set('view engine', 'ejs');
// app.use(i18n);
// const i18n = require('./i18n');
// res.render('index.ejs');