const client = require('./db');
const user = require('./user.js');
const {assigningQuery} = require ('./databaseQueries');
// let myUser = new user;

function databaseAssigning(result, myUser) {
    myUser.setCustomerNino = result.rows[0].custidnino
    myUser.setCustomerDate = result.rows[0].custiddate
    myUser.setCustomerDOB = result.rows[0].custiddob
    myUser.setCustomerForename = result.rows[0].custidforename
    myUser.setCustomerSurname = result.rows[0].custidsurname
    myUser.setCustomerTitle = result.rows[0].custidtitle
    myUser.setCustomerSex = result.rows[0].entitlementsex
    myUser.setCustomerAddress1 = result.rows[0].custidaddress1
    myUser.setCustomerAddress2 = result.rows[0].custidaddress2
    myUser.setCustomerAddress3 = result.rows[0].custidaddress3
    myUser.setCustomerAddress4 = result.rows[0].custidaddress4
    myUser.setAppointeeNino = result.rows[0].appointeenino
    myUser.setAppointeeTitle = result.rows[0].appointeetitle
    myUser.setAppointeeForename = result.rows[0].appointeeforename
    myUser.setAppointeeSurname = result.rows[0].appointeesurname
    myUser.setAppointeeAddress1 = result.rows[0].appointeeaddress1
    myUser.setAppointeeAddress2 = result.rows[0].appointeeaddress2
    myUser.setAppointeeAddress3 = result.rows[0].appointeeaddress3
    myUser.setAppointeeAddress4 = result.rows[0].appointeeaddress4
    myUser.setCustomerClaimStatus = result.rows[0].custidclaimstatus
    myUser.setCustomerCountryCode = result.rows[0].custidcountrycode
    myUser.setBankSortCode = result.rows[0].payeebanksortcode
    myUser.setCustomerBankAccNo = result.rows[0].payeebankaccno
    myUser.setSecurityQuestion1 = result.rows[0].securityquestion1
    myUser.setSecurityQuestion2 = result.rows[0].securityquestion2
    myUser.setSecurityQuestion3 = result.rows[0].securityquestion3
    return myUser;
}

module.exports = {
    databaseAssigning
}