const client = require('./db');
const user = require('./user.js');
const {myUser} = require('./databaseAssigning')


function checkUser(){
    console.log(myUser);
    console.table(myUser);
}

module.exports = {
    checkUser
}