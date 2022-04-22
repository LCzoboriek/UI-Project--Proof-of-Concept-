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

module.exports = {
    validateNino
}