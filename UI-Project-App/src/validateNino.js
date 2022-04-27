const client = require('./db');
const user = require('./user.js');
const {ninoQuery} = require('./databaseQueries')
const {assigningQuery} = require('./databaseQueries')
const {databaseAssigning} = require('./databaseAssigning');
const { validateSecurityQuestions } = require('./securityQuestions');
const {validateAnswers} = require('./securityQuestions');
const listBenefits = require('./databaseQueries');


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

const displayBenefitDetails = (req, res) => {
    let IIDB = 0
    let OVIID = 0
    let IDB = 0
    let IICS = 0
    let OVII = 0
    myQuery = `SELECT benefittype, count(benefittype) FROM people GROUP by benefittype`
    client.query(myQuery, 
        (error, result) => {
            if(error){
                console.log(error);
            } else {
                for(let i = 0; i < result.rowCount; i++){
                console.log(result.rows[i].benefittype + ' ' + result.rows[i].count);
                if(result.rows[i].benefittype == 'IIDB'){
                    IIDB = result.rows[i].count
                } else if(result.rows[i].benefittype == 'OVIID'){
                    OVIID = result.rows[i].count
                } else if(result.rows[i].benefittype == 'IDB'){
                    IDB = result.rows[i].count
                } else if(result.rows[i].benefittype == 'IICS'){
                    IICS = result.rows[i].count
                } else if(result.rows[i].benefittype == 'OVII'){
                    OVII = result.rows[i].count
                }
                }
                res.render('benefit-overview', {v1: IIDB, v2: OVIID, v3: IDB, v4: IICS, v5: OVII})
                    }
            } 
        )
};

module.exports = {
    validateNino,  displayOverviewDetails, displayAddressDetails, displayPaymentDetails, displayAppointeeDetails, displayBenefitDetails
}