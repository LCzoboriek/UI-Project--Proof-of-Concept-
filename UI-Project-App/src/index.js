const express = require('express');
const nunjucks = require('nunjucks');
// const njk = require('njk');
const app = express();
const peopleClient = require('./db');
const http = require('http');
const body_parser = require('body-parser');
const path = require('path');
// const sass = require('sass');
const PORT = 4000
// const result = sass.compile('./test.scss');
app.use(express.static(path.join(__dirname, 'public')));
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.set('views','./views'); // Path to where my views are located
app.set('view engine','nunjucks'); // Using a view engine and what one you are using

nunjucks.configure(
    [
      "node_modules/govuk-frontend",
      "views",
    ], 
    {
      autoescape: true,
      express: app,
    },
  )

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages/test.njk'))
})

app.use('/assets', express.static(path.join(__dirname, '../public')))

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
