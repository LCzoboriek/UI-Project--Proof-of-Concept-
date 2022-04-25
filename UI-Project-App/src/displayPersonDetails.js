const client = require('./db');
const user = require('./user.js');
const {securityQuery} = require('./databaseQueries')
const myUser = require ('./securityQuestions');

let myCustomer = myUser.myUser

function displayOverviewDetails(myUser, res, req){
    // res.locals.myUser = myCustomer
    console.log(myCustomer);
}



module.exports = {
    displayOverviewDetails
}