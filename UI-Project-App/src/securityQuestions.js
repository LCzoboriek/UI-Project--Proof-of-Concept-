const client = require('./db');
const user = require('./user.js');


// Class user now needed as it needs to remember whats the currently logged in customer
// from the NINO

function validateSecurityQuestions(params, res){
    let userName = params.username;
    let password = params.password;
    let tableName = 'people';
    let columnName = 'custidnino';
    let myQuery = `SELECT securityquestion1, securityquestion2, securityquestion3 FROM "${tableName}" WHERE ${columnName} = '${userName}'`;
    client.query(myQuery, 
        (error, result) => {
            if(error){
                console.log(error);
            } else {
                let dbpassword = result.rows[0].password;
                if(dbpassword === password){
                    res.render('homehub');
                } else {
                    res.render('home');
                }
            } 
        })
}

module.exports = {
    validateSecurityQuestions
}