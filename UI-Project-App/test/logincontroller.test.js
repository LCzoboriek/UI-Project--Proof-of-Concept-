const {expect} = require('chai');
const {databaseAssigning} = require('../src/webController');

describe('database assigning', () => {
    let result = {
        rows: [ 
            { 
                custidnino: 'AA050388B',
                custiddate: '2020-01-05',
                custiddob: '1994-03-20',
                custidforename: 'Scarlett',
                custidsurname: 'Walter',
                custidtitle: 'Ms.  ',
                entitlementsex: 'M',
                custidaddress1: 'Stornaway',
                custidaddress2: 'Ap #588-7952 Nunc St.',
                custidaddress3: 'Carmarthenshire',
                custidaddress4: 'E1R 9LF',
                appointeenino: 'AA232718M',
                appointeetitle: 'Mr.',
                appointeeforename: 'Quamar',
                appointeesurname: 'Galloway',
                appointeeaddress1: 'Ap #153-2597 Ligula. Av.',
                appointeeaddress2: 'Dunstable',
                appointeeaddress3: 'AS8W 1EZ',
                appointeeaddress4: 'Midlothian',
                custidclaimstatus: 'M',
                custidcountrycode: '230',
                payeebanksortcode: '56-26-74',
                payeebankaccno: '236235715',
                securityquestion1: 'Olivia',
                securityquestion2: 'Lossiemouth',
                securityquestion3: 'Mitsubishi Motors'
    }]}
    let emptyUser = {}
    let myUser = { 
            setAppointeeAddress1: "Ap #153-2597 Ligula. Av.",
            setAppointeeAddress2: "Dunstable",
            setAppointeeAddress3: "AS8W 1EZ",
            setAppointeeAddress4: "Midlothian",
            setAppointeeForename: "Quamar",
            setAppointeeNino: "AA232718M",
            setAppointeeSurname: "Galloway",
            setAppointeeTitle: "Mr.",
            setBankSortCode: "56-26-74",
            setCustomerAddress1: "Stornaway",
            setCustomerAddress2: "Ap #588-7952 Nunc St.",
            setCustomerAddress3: "Carmarthenshire",
            setCustomerAddress4: "E1R 9LF",
            setCustomerBankAccNo: "236235715",
            setCustomerClaimStatus: "M",
            setCustomerCountryCode: "230",
            setCustomerDOB: "1994-03-20",
            setCustomerDate: "2020-01-05",
            setCustomerForename: "Scarlett",
            setCustomerNino: "AA050388B",
            setCustomerSex: "M",
            setCustomerSurname: "Walter",
            setCustomerTitle: "Ms.  ",
            setSecurityQuestion1: "Olivia",
            setSecurityQuestion2: "Lossiemouth",
            setSecurityQuestion3: "Mitsubishi Motors"
}
    it('returns a correct user from assinging to myUser', () => {
        expect(databaseAssigning(result, emptyUser)).to.eql(myUser);
    })
})