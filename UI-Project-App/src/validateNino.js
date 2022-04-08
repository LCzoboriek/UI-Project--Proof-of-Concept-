const client = require('./db');
const user = require('./user.js');

function validateNino(params, res){
    let nino = params.nino;
    console.log(nino);
    let tableName = 'people';
    let columnName = 'custidnino';
    let myQuery = `SELECT "${columnName}" FROM "${tableName}" WHERE ${columnName} = '${nino}'`;
    console.log(myQuery);
    client.query(myQuery,
        (error, result) => {
            if(error){
                console.log('im in the if loop');
                console.log(error);
            } else {
                let dbnino = result.rows[0].custidnino;
                console.log(dbnino);
                if(dbnino === nino) {
                    res.render('security-question-screen');
                } else {
                    console.log('im in the else part');
                    res.render('nino-customer-check')
                }
            }
        })
}

module.exports = {
    validateNino
}