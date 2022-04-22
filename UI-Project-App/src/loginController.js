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
                console.log('im just before assigning the dbpassword = result.rows');
                let dbpassword = result.rows[0].password;
                if(dbpassword === password){
                    console.log('im just before rendering home hub');
                    sessions.userName = userName
                    sessions.password = password
                    res.render('homehub');
                    console.log('im just after rendering home hub' + sessions.userName + sessions.password);
                } else {
                    res.render('home');
                }
            } 
        })
}

module.exports = {
    validatePassword
}