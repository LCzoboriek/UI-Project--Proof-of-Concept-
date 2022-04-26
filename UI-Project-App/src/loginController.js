const client = require('./db');
const user = require('./user.js');
const sessions = require('express-session')

function validatePassword(params, res){
    let userName = params.username;
    let password = params.password;
    let tableName = 'dwp-staff-users';
    let columnName = 'user_name';
    //seperate out the database logic away from this, .thens being used again
    let myQuery = `SELECT password FROM "${tableName}" WHERE ${columnName} = '${userName}'`;
    client.query(myQuery, 
        (error, result) => {
            if(error){
                console.log(error);
            } else {
                let dbpassword = result.rows[0].password;
                if(dbpassword === password){
                    sessions.userName = userName
                    sessions.password = password
                    res.render('homehub');
                } else {
                    res.render('home');
                }
            } 
        })
}


const changePassword = (req, res) => {
    res.render('change-password')
    let password = sessions.password
    let newPassword  = params.password
    let columnName = 'password'
    let tableName = 'dwp-staff-users'
    let userName = sessions.userName
    let myQuery = `UPDATE ${tableName} SET password ='${newPassword}' WHERE ${columnName} = '${userName}'`
    if(newPassword === password){
        console.log('the password is the same as the old one');
    } else {
        client.query(myQuery,
            (error, result) => {
                if(error){
                    console.log(error);
                } else {
                    console.log('Succedeed');
                }
            })
    }
}

module.exports = {
    validatePassword, changePassword
}