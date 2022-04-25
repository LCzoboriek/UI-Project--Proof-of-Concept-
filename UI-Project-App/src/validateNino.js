const client = require('./db');
const user = require('./user.js');
const {ninoQuery} = require('./databaseQueries')
const {assigningQuery} = require('./databaseQueries')
const {databaseAssigning} = require('./databaseAssigning');
const { validateSecurityQuestions } = require('./securityQuestions');
const {validateAnswers} = require('./securityQuestions');

let myUser = new user;

function validateNino(params, res){
    ninoQuery(params.nino)
    .then(result => {
        console.log(result);
        if(result.rowCount === 0){
            res.render('nino-customer-check')
        } else {
            assigningQuery(params.nino)
            .then( result => {
                myUser = databaseAssigning(result, myUser)
                console.log('im within validate nino');
                console.log(myUser);
                validateSecurityQuestions(myUser, params, res)
            })
            .catch(error => {
                console.log(error);
            })
            }
        }
    )
    .catch(error=> {
        console.log(error);
    });
}

const displayOverviewDetails = (req, res) => {
    console.log(myUser);
    res.locals.myUser = myUser
    res.render('person-overview')
}

const displayAddressDetails = (req, res) => {
    res.locals.myUser = myUser
    res.render('person-address-details')
}

const displayPaymentDetails = (req, res) => {
    res.locals.myUser = myUser
    res.render('bank-payment-details')
}

const displayAppointeeDetails = (req, res) => {
    res.locals.myUser = myUser
    res.render('appointee-overview')
}

module.exports = {
    validateNino,  displayOverviewDetails, displayAddressDetails, displayPaymentDetails, displayAppointeeDetails
}