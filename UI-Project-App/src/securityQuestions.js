const client = require('./db');
const user = require('./user.js');
const {securityQuery} = require('./databaseQueries')


// Class user now needed as it needs to remember whats the currently logged in customer
// from the NINO


async function validateSecurityQuestions(myUser, params, res){
    console.log(myUser.custidnino + 'im logging the cust id nino within validate security questions');
    await securityQuery(myUser.custidnino)
    console.log(myUser.securityquestion1);
        if(myUser.securityquestion1 === params.securityquestion1 &&
            myUser.securityquestion2 === params.securityquestion2 &&
            myUser.securityquestion3 === params.securityquestion3){
                console.log('in the if statement');
            } else {
                // res.render('security-question-screen')
                console.log('failed security questions');
            }
    }
    
module.exports = {
    validateSecurityQuestions
}

