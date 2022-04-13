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
                            myUser.setcustomerNino = result.rows[0].custidnino
                            myUser.setcustomerDate = result.rows[0].custiddate
                            myUser.setcustomerDob = result.rows[0].custiddob
                            myUser.setcustomerForename = result.rows[0].custidforename
                            myUser.setcustomerSurname = result.rows[0].custidsurname
                            myUser.setcustomerTitle = result.rows[0].custidtitle
                            myUser.setcustomerSex = result.rows[0].entitlementsex
                            myUser.setcustomerAddress1 = result.rows[0].custidaddress1
                            myUser.setcustomerAddress2 = result.rows[0].custidaddress2
                            myUser.setcustomerAddress3 = result.rows[0].custidaddress3
                            myUser.setcustomerAddress4 = result.rows[0].custidaddress4
                            myUser.setappointeeNino = result.rows[0].appointeenino
                            myUser.setappointeeTitle = result.rows[0].appointeetitle
                            myUser.setappointeeForename = result.rows[0].appointeeforename
                            myUser.setappointeeSurname = result.rows[0].appointeesurname
                            myUser.setappointeeAddress1 = result.rows[0].appointeeaddress1
                            myUser.setappointeeAddress2 = result.rows[0].appointeeaddress2
                            myUser.setappointeeAddress3 = result.rows[0].appointeeaddress3
                            myUser.setappointeeAddress4 = result.rows[0].appointeeaddress4
                            myUser.setcustomerClaimStatus = result.rows[0].custidclaimstatus
                            myUser.setcustomerCountryCode = result.rows[0].custidcountrycode
                            myUser.setcustomerSortCode = result.rows[0].payeebanksortcode
                            myUser.setcustomerBankAccNo = result.rows[0].payeebankaccno
                            myUser.setcustomerSecurityQuestion1 = result.rows[0].securityquestion1
                            myUser.setcustomerSecurityQuestion2 = result.rows[0].securityquestion2
                            myUser.setcustomerSecurityQuestion3 = result.rows[0].securityquestion3
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