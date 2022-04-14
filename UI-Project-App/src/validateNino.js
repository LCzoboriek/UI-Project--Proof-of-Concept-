const client = require('./db');
const user = require('./user.js');
let myUser = new user;

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
                    
                    
                    let nino = params.nino
                    let myQuery = `SELECT custidnino, custiddate, custiddob, custidforename, custidsurname, custidtitle, entitlementsex, custidaddress1,
                    custidaddress2, custidaddress3, custidaddress4, appointeenino, appointeetitle, appointeeforename, appointeesurname, appointeeaddress1,
                    appointeeaddress2, appointeeaddress3, appointeeaddress4, custidclaimstatus, custidcountrycode, payeebanksortcode, payeebankaccno,
                    securityquestion1, securityquestion2, securityquestion3 FROM people WHERE custidnino = '${nino}'`;
                    client.query(myQuery, (error, result) => {
                        if(error){
                            
                        } else {
                            myUser.setCustomerNino = result.rows[0].custidnino
                            myUser.setCustomerDate = result.rows[0].custiddate
                            myUser.setCustomerDOB = result.rows[0].custiddob
                            myUser.setCustomerForename = result.rows[0].custidforename
                            myUser.setCustomerSurname = result.rows[0].custidsurname
                            myUser.setCustomerTitle = result.rows[0].custidtitle
                            myUser.setCustomerSex = result.rows[0].entitlementsex
                            myUser.setCustomerAddress1 = result.rows[0].custidaddress1
                            myUser.setCustomerAddress2 = result.rows[0].custidaddress2
                            myUser.setCustomerAddress3 = result.rows[0].custidaddress3
                            myUser.setCustomerAddress4 = result.rows[0].custidaddress4
                            myUser.setAppointeeNino = result.rows[0].appointeenino
                            myUser.setAppointeeTitle = result.rows[0].appointeetitle
                            myUser.setAppointeeForename = result.rows[0].appointeeforename
                            myUser.setAppointeeSurname = result.rows[0].appointeesurname
                            myUser.setAppointeeAddress1 = result.rows[0].appointeeaddress1
                            myUser.setAppointeeAddress2 = result.rows[0].appointeeaddress2
                            myUser.setAppointeeAddress3 = result.rows[0].appointeeaddress3
                            myUser.setAppointeeAddress4 = result.rows[0].appointeeaddress4
                            myUser.setCustomerClaimStatus = result.rows[0].custidclaimstatus
                            myUser.setCustomerCountryCode = result.rows[0].custidcountrycode
                            myUser.setBankSortCode = result.rows[0].payeebanksortcode
                            myUser.setCustomerBankAccNo = result.rows[0].payeebankaccno
                            myUser.setSecurityQuestion1 = result.rows[0].securityquestion1
                            myUser.setSecurityQuestion2 = result.rows[0].securityquestion2
                            myUser.setSecurityQuestion3 = result.rows[0].securityquestion3
                            res.render('security-question-screen')
                            console.log('im just after rendering the security question screen');
                            console.table(myUser);
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