class myUser {
    constructor(custidnino, custiddate, custiddob, custidforename, custidsurname, 
        custidtitle, entitlementsex, custidaddress1, custidaddress2, custidaddress3, 
        custidaddress4, appointeenino, appointeetitle, appointeeforename, appointeesurname, 
        appointeeaddress1, appointeeaddress2, appointeeaddress3, appointeeaddress4, custidclaimstatus,
        custidcountrycode, payeebanksortcode, payeebankaccno, securityquestion1, securityquestion2, securityquestion3)
    {
        this.custidnino = custidnino;
        this.custiddate = custiddate;
        this.custiddob = custiddob;
        this.custidforename = custidforename;
        this.custidsurname = custidsurname;
        this.custidtitle = custidtitle;
        this.entitlementsex = entitlementsex;
        this.custidaddress1 = custidaddress1;
        this.custidaddress2 = custidaddress2;
        this.custidaddress3 = custidaddress3;
        this.custidaddress4 = custidaddress4;
        this.appointeenino = appointeenino;
        this.appointeetitle = appointeetitle;
        this.appointeeforename = appointeeforename;
        this.appointeesurname = appointeesurname;
        this.appointeeaddress1 = appointeeaddress1;
        this.appointeeaddress2 = appointeeaddress2;
        this.appointeeaddress3 = appointeeaddress3;
        this.appointeeaddress4 = appointeeaddress4;
        this.custidclaimstatus = custidclaimstatus;
        this.custidcountrycode = custidcountrycode;
        this.payeebanksortcode = payeebanksortcode;
        this.payeebankaccno = payeebankaccno;
        this.securityquestion1 = securityquestion1;
        this.securityquestion2 = securityquestion2;
        this.securityquestion3 = securityquestion3
    } 

    get customerNino(){
        return this.custidnino
    }
    get customerDate(){
        return this.custiddate
    }
    get customerDob(){
        return this.custiddob
    }
    get customerFirstname(){
        return this.custidforename
    }
    get customerSurname(){
        return this.custidsurname
    }
    get customerTitle(){
        return this.custidtitle
    }
    get customerSex(){
        return this.entitlementsex
    }
    get customerAddress1(){
        return this.custidaddress1
    }
    get customerAddress2(){
        return this.custidaddress1
    }
    get customerAddress3(){
        return this.custidaddress1
    }
    get customerAddress4(){
        return this.custidaddress4
    }
    get appointeeNino(){
        return this.appointeenino
    }
    get appointeeTitle(){
        return this.appointeetitle
    }
    get appointeeForename(){
        return this.appointeeforename
    }
    get appointeeSurname(){
        return this.appointeesurname
    }
    get appointeeAddress1(){
        return this.appointeeaddress1
    }
    get appointeeAddress2(){
        return this.appointeeaddress2
    }
    get appointeeAddress3(){
        return this.appointeeaddress3
    }
    get appointeeAddress4(){
        return this.appointeeaddress4
    }
    get customerClaimStatus(){
        return this.custidclaimstatus
    }
    get customerCountryCode(){
        return this.custidcountrycode
    }
    get customerBankSortCode(){
        return this.payeebanksortcode
    }
    get customerPayeeBankAccNo(){
        return this.payeebankaccno
    }
    get customerSecurityQuestion1(){
        return this.securityquestion1
    }
    get customerSecurityQuestion2(){
        return this.securityquestion2
    }
    get customerSecurityQuestion3(){
        return this.securityquestion3
    }
    set appointeeAddress1(appointeeaddress1){
        this.appointeeaddress1 = appointeeaddress1
    }
    set appointeeAddress3(appointeeaddress3){
        this.appointeeaddress3 = appointeeaddress3
    }
    set appointeeAddress4(appointeeaddress4){
        this.appointeeaddress4 = appointeeaddress4
    }
    set customerCountryCode(custidcountrycode){
        this.custidcountrycode = custidcountrycode
    }
    set appointeeForename(appointeeforename){
        this.appointeeforename = appointeeforename
    }
    set customerClaimStatus(custidclaimstatus){
        this.custidclaimstatus = custidclaimstatus
    }
    set appointeeAddress2(appointeeaddress2){
        this.appointeeaddress2 = appointeeaddress2
    }
    set customerBankAccNo(payeebankaccno){
        this.payeebankaccno = payeebankaccno
    }
    set customerSecurityQuestion1(securityquestion1){
        this.securityquestion1 = securityquestion1
    }
    set customerNino(custidnino){
        this.custidnino = custidnino
    }
    set SecurityQuestion3(securityquestion3){
        this.securityquestion3 = securityquestion3
    }
    set customerDate(custiddate){
        this.custiddate = custiddate
    }
    set customerSecurityQuestion2(securityquestion2){
        this.securityquestion2 = securityquestion2
    }
    set customerBankSortCode(payeebanksortcode){
        this.payeebanksortcode = payeebanksortcode
    }
    set appointeeSurname(appointeesurname){
        this.appointeesurname = appointeesurname
    }
    set appointeeTitle(appointeetitle){
        this.appointeetitle = appointeetitle
    }
    set appointeeNino(appointeenino){
        this.appointeenino = appointeenino
    }
    set customerAddress4(custidaddress4){
        this.custidaddress4 = custidaddress4
    }
    set customerAddress3(custidaddress3){
        this.custidaddress3 = custidaddress3
    }
    set customerAddress2(custidaddress2){
        this.custidaddress2 = custidaddress2
    }
    set customerAddress1(custidaddress1){
        this.custidaddress1 = custidaddress1
    }
    set customerSex(entitlementsex){
        this.entitlementsex = entitlementsex
    }
    set customerTitle(custidtitle){
        this.custidtitle = custidtitle
    }
    set customerSurname(custidsurname){
        this.custidsurname = custidsurname
    }
    set customerForename(custidforename){
        this.custidforename = custidforename
    }
    set customerDob(custiddob){
        this.custiddob = custiddob
    }
}

module.exports = myUser;