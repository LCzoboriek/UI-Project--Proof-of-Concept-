const client = require('./db');
const user = require('./user.js');
const {securityQuery} = require('./databaseQueries')
let myUser = new user


// Class user now needed as it needs to remember whats the currently logged in customer
// from the NINO


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
            
        } else {
            console.log('it didnt match!');
            res.render('./nino-customer-check')
        }
    }
    

module.exports = {
    validateSecurityQuestions, myUser
}

