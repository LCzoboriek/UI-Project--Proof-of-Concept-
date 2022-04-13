const client = require('./db');
const myUser = require('./user.js');
const user = require('./user.js');
ley myUser = new user;

function validateNino(params, res){
    let nino = params.nino;
    console.log(nino);
    let tableName = 'people';
    let columnName = 'custidnino';
    let myQuery = `SELECT "${columnName}" FROM "${tableName}" WHERE ${columnName} = '${nino}'`;

    client.query(myQuery,
        (error, result) => {
            console.log(result.rowCount);
            if(error){
                console.log(error);
            } else {
                if (result.rowCount > 0) {
                    let nino = params.nino
                    let myQuery = `SELECT custidnino, custiddate, custiddob, custidforename, custidsurname, custidtitle, entitlementsex, custidaddress1,
                    custidaddress2, custidaddress3, custidaddress4, appointeenino, appointeetitle, appointeeforename, appointeesurname, appointeeaddress1,
                    appointeeaddress2, appointeeaddress3, appointeeaddress4, custidclaimstatus, custidcountrycode, payeebanksortcode, payeebankaccno,
                    securityquestion1, securityquestion2, securityquestion3 FROM people WHERE custidnino = '${nino}'`;
                    client.query(myQuery, (error, result) => {
                        if(error){
                            console.log(error);
                        } else {
                            myUser.setcustidnino = result.rows[0].custidnino
                            myUser.setcustiddate = result.rows[0].custiddate
                            myUser.setcustiddob = result.rows[0].custiddob
                            myUser.setcustidforename = result.rows[0].custidforename
                            myUser.setcustidsurname = result.rows[0].custidsurname
                            myUser.setcustidtitle = result.rows[0].custidtitle
                            myUser.setentitlementsex = result.rows[0].entitlementsex
                            myUser.setcustidaddress1 = result.rows[0].custidaddress1
                            myUser.setcustidaddress2 = result.rows[0].custidaddress2
                            myUser.setcustidaddress3 = result.rows[0].custidaddress3
                            myUser.setcustidaddress4 = result.rows[0].custidaddress4
                            myUser.setappointeenino = result.rows[0].appointeenino
                            myUser.setappointeetitle = result.rows[0].appointeetitle
                            myUser.setappointeeforename = result.rows[0].appointeeforename
                            myUser.setappointeesurname = result.rows[0].appointeesurname
                            myUser.setappointeeaddress1 = result.rows[0].appointeeaddress1
                            myUser.setappointeeaddress2 = result.rows[0].appointeeaddress2
                            myUser.setappointeeaddress3 = result.rows[0].appointeeaddress3
                            myUser.setappointeeaddress4 = result.rows[0].appointeeaddress4
                            myUser.setcustidclaimstatus = result.rows[0].custidclaimstatus
                            myUser.setcustidcountrycode = result.rows[0].custidcountrycode
                            myUser.setpayeebanksortcode = result.rows[0].payeebanksortcode
                            myUser.setpayeebankaccno = result.rows[0].payeebankaccno
                            myUser.setsecurityquestion1 = result.rows[0].securityquestion1
                            myUser.setsecurityquestion2 = result.rows[0].securityquestion2
                            myUser.setsecurityquestion3 = result.rows[0].securityquestion3
                            res.render('security-question-screen')
                        }
                    })
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