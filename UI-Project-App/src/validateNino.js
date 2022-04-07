const client = require('./db');
const user = require('./user.js');

function validateNino(params, res){
    let nino = params.nino;
    console.log(nino);
    let tableName = 'people';
    let columnName = 'custidnino';
    let myQuery = `SELECT custidnino FROM "${tableName}" WHERE ${columnName} = '${nino}'`;
    console.log(myQuery);
    client.query(myQuery,
        (error, result) => {
            if(error){
                console.log(error);
            } else {
                let dbnino = result.rows[0].nino;
                if(dbnino === nino) {
                    res.render('security-question-screen');
                } else {
                    res.render('nino-customer-check')
                }
            }
        })
}

module.exports = {
    validateNino
}