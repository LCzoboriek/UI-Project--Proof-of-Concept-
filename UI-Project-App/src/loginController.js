const client = require('./db');
const user = require('./user.js');

function validatePassword(params, res){
    let userName = params.username;
    let password = params.password;
    let tableName = 'dwp-staff-users';
    let columnName = 'user_name';
    let myQuery = `SELECT password FROM "${tableName}" WHERE ${columnName} = '${userName}'`;
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
    validatePassword
}