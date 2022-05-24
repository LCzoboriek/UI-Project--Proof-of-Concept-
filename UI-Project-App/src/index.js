const express = require('express');
const nunjucks   = require('nunjucks');
const app = express();
const http = require('http');
const body_parser = require('body-parser');
const path = require('path');
const sessions = require('express-session')
const cookieParser = require('cookie-parser')
const PORT = 4000
const user = require('./user.js');
const webController = require('./webController');

app.use(express.static(path.join('./public/')));
app.use('/assets', express.static(path.join(__dirname, '../../assets')));
app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser.json());
app.use(cookieParser());
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
  secret: 'thisismysecretkeyIICSDATASECURE',
  saveUnitialized: true,
  cookie: { maxAge : oneDay},
  resave: false
}))

app.set('views','./src/views'); 
app.set('view engine','njk');
 //Setting up a value for the cookies to only last for 24 hours, dont want sessions to last longer then this
//due to security issues




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
  session = req.session
  if(session.userName != ''){
    res.render('nino-customer-check')}
  else {
    res.redirect('/')
  }
})

app.get('/logout',(req, res) => {
  req.session.destroy();
  res.redirect('/');
})


app.get('/edit-profile', (req, res)=>{
  res.render('edit-profile')
})

app.get('/change-password', (req, res)=> {
  webController.changePassword(req, res)
})

app.get('/customerHub', (req, res) => {
  res.render('customerHub')
})

app.get('/overview-details', (req, res) => {
  webController.displayOverviewDetails(req, res);
})

app.get('/person-address-details', (req, res) => {
  webController.displayAddressDetails(req, res)
})

app.get('/bank-payment-details', (req, res) => {
  webController.displayPaymentDetails(req, res)
})

app.get('/appointee-overview', (req, res) => {
  webController.displayAppointeeDetails(req, res)
})

app.get('/benefit-overview', (req, res) => {
  webController.displayBenefitDetails(req, res)
})

app.post('/login', (req, res) => {
  session=req.sessions;
  webController.validatePassword(req.body, res)
});

app.post('/nino-customer-check', (req, res) => {
  webController.validateNino(req.body, res)
});

app.post('/change-password', (req, res) => {
  webController.updatePassword(req, res)
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});