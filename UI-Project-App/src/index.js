const express = require('express');
const nunjucks = require('nunjucks');
const app = express();
const peopleClient = require('./db');
const http = require('http');
const body_parser = require('body-parser');
const path = require('path');
const PORT = 4000
const loginController = require('./loginController');
const user = require('./user.js');

app.use(express.static(path.join('./public/')));
app.use('/assets', express.static(path.join(__dirname, '../../assets')));
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());

app.set('views','./src/views'); // Path to where my views are located
app.set('view engine','njk'); // Using a view engine and what one you are using

nunjucks.configure(
  [
    "node_modules/govuk-frontend",
    "./src/views",
  ],
  {
    autoescape: true,
    express: app,
  },
);

app.get('/', (req, res) => {
  res.render('home')
});

app.get('/home', (req, res) => {
  res.render('home')
});

app.get('/homehub', (req, res) => {
  res.render('homehub')
})

app.get('/nino-customer-check', (req, res) => {
  res.render('nino-customer-check')
})

app.post('/login', (req, res) => {
  loginController.validatePassword(req.body, res)
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
