const client = require('./db');
const user = require('./user.js');


function validateNino(params, res){
    let nino = params.nino;
    console.log(nino);
    let tableName = 'people';
    let columnName = 'custidnino';
    let myQuery = `SELECT "${columnName}" FROM "${tableName}" WHERE ${columnName} = '${nino}'`;

    client.query(myQuery,
        (error, result) => {
            if(error){
                console.log(error);
            } else {
                if (result.rowCount > 0) {
                    console.log('im just before assigning new user');
                    let myUser = new user
                    console.log('im just after assigning user');
                    res.render('security-question-screen')
                    console.log('im just after rendering the security question screen');
                } else {
                    console.log('nino-customer-check re render');
                    res.render('nino-customer-check', {error: true})
                }
            }
        })
}
module.exports = {
    validateNino
}