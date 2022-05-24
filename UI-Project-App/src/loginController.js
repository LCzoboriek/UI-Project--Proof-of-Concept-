const client = require('./db');
const user = require('./user.js');
const sessions = require('express-session')
const { updatePasswordInDb } = require('./databaseQueries')

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
                console.log(result);
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


function changePassword(req, res){
    res.render('change-password')
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


module.exports = {
    validatePassword, changePassword, updatePassword
}