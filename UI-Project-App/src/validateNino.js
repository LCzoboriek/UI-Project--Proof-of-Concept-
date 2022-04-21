const client = require('./db');
const user = require('./user.js');
const {ninoQuery} = require('./databaseQueries')
const {assigningQuery} = require('./databaseQueries')
const {databaseAssigning} = require('./databaseAssigning');
const { validateSecurityQuestions } = require('./securityQuestions');

let myUser = new user;

function validateNino(params, res){
    ninoQuery(params.nino)
    .then(result => {
        if(result.rowCount === 0){
            res.render('nino-customer-check')
        } else {
            assigningQuery(params.nino)
            .then( result => {
                myUser = databaseAssigning(result, myUser)
                // console.table(myUser);
                res.render('security-question-screen')
                let motherName = params.securityquestion1
                let townName = params.securityquestion2
                let firstCar = params.securityquestion3
                validateSecurityQuestions(myUser, params, motherName, townName, firstCar, res)
            })
            .catch(error => {
                console.log('im the first .catch in validateNino');
                console.log(error);
            })
            }
        }
    )
    .catch(error=> {
        console.log('im the second catch in validate nino');
        console.log(error);
    });
}

module.exports = {
    validateNino
}