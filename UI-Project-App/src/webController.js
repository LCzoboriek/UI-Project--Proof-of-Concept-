const user = require('./user.js');
const sessions = require('express-session')
const { updatePasswordInDb, ninoQuery, assigningQuery, getValidPassword, getBenefitDetails, securityQuery } = require('./databaseQueries')
let myUser = new user;

function validatePassword(params, res){
    let userName = params.username;
    let password = params.password;
    getValidPassword(userName)
    .then(result => {
        console.log(result);
        let dbpassword = result.rows[0].password;
        if(dbpassword === password){
            sessions.userName = userName
            sessions.password = password
            res.render('homehub');
        } else {
            res.render('home');
        }
    })
    .catch(error => {
        console.log(error);
    })
}

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

const updatePassword = (req, res) => {
    let newPassword = req.body.password
    let userName = sessions.userName
    updatePasswordInDb(newPassword, userName)
    .then(result => {
        res.render('home')
    })
    .catch(error => {
        console.log(error);
    })

}

function changePassword(req, res){
    res.render('change-password')
}

const displayOverviewDetails = (req, res) => {
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
    getBenefitDetails()
    .then(result => {
        for(let i = 0; i < result.rowCount; i++){
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
    })
    .catch(error => {
        console.log(error);
    })
} 

async function validateSecurityQuestions(myUser, params, res){
    console.log(myUser.custidnino + 'im logging the cust id nino within validate security questions');
    await securityQuery(myUser.custidnino)
    if(myUser.getCustomerSecurityQuestion1 === params.securityquestion1 &&
        myUser.getCustomerSecurityQuestion2 === params.securityquestion2 &&
        myUser.getCustomerSecurityQuestion3 === params.securityquestion3){
            console.log('it matched!');
            res.locals.myUser = myUser; //Locals stores data in session, temporary storage in express
            //passing data from one middleware to another middleware, you can chain them together
            res.render('./customerHub')
            console.log(myUser);
        } else {
            console.log('it didnt match!');
            res.render('./nino-customer-check')
        }
    }

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
    validatePassword, validateNino, updatePassword, changePassword, displayOverviewDetails,
    displayAddressDetails, displayPaymentDetails, displayAppointeeDetails, displayBenefitDetails, databaseAssigning
}