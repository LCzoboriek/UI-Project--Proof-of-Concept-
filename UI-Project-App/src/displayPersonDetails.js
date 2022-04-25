const client = require('./db');
const user = require('./user.js');
const {securityQuery} = require('./databaseQueries')


function displayOverviewDetails(myUser, res){
    res.locals.myUser = myUser
    console.log(myUser.custidnino);
}



module.exports = {
    displayOverviewDetails
}