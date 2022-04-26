const client = require('./db');
const user = require('./user.js');
let myUser = new user;

const ninoQuery = (nino) => {
    console.log(nino + ' this is the database queries js');
    let tableName = 'people';
    let columnName = 'custidnino';
    return client.query(`SELECT "${columnName}" FROM "${tableName}" WHERE ${columnName} = '${nino}'`)
}

const assigningQuery = (nino) => {
    return client.query(`SELECT custidnino, custiddate, custiddob, custidforename, custidsurname, custidtitle, entitlementsex, custidaddress1,
                     custidaddress2, custidaddress3, custidaddress4, appointeenino, appointeetitle, appointeeforename, appointeesurname, appointeeaddress1,
                     appointeeaddress2, appointeeaddress3, appointeeaddress4, custidclaimstatus, custidcountrycode, payeebanksortcode, payeebankaccno,
                     securityquestion1, securityquestion2, securityquestion3 FROM people WHERE custidnino = '${nino}'`);
}

const securityQuery = async (nino) => {
    let result = await client.query(`SELECT securityquestion1, securityquestion2, securityquestion3 FROM people WHERE custidnino = '${nino}'`);
    return result
}

const updatePasswordInDb = (newPassword, userName) => {
    console.log(newPassword + userName);
    let tableName = 'dwp-staff-users'
    let columnName = 'user_name'
    return client.query(`UPDATE "${tableName}" SET password ='${newPassword}' WHERE ${columnName} = '${userName}' AND password != '${newPassword}`);
}
        
module.exports = {
    ninoQuery, assigningQuery, securityQuery, updatePasswordInDb   
}