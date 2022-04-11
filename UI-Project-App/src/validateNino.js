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
            console.log(result.rowCount);
            console.log('im inside the query');
            if(error){
                console.log(error);
            } else {
                if (result.rowCount > 0) {
                    console.log('im inside the result.rowcount');
                    let dbnino = result.rows[0].custidnino
                    if(dbnino === nino) {
                        res.render('security-question-screen')
                    } 
                } else {
                    res.render('nino-customer-check')
                }
                // let dbnino = result.rows[0].custidnino
                // if(dbnino === nino) {
                //     res.render('security-question-screen');
                // } else {
                //     res.render('nino-customer-check')
                // }
            }
        })
}

module.exports = {
    validateNino
}