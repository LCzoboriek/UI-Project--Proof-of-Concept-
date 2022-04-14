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
    get getCustomerNino(){
        return this.custidnino
    }
    get getCustomerDate(){
        return this.custiddate
    }
    get getCustomerDob(){
        return this.custiddob
    }
    get getCustomerFirstname(){
        return this.custidforename
    }
    get getCustomerSurname(){
        return this.custidsurname
    }
    get getCustomerTitle(){
        return this.custidtitle
    }
    get getCustomerSex(){
        return this.entitlementsex
    }
    get getCustomerAddress1(){
        return this.custidaddress1
    }
    get getCustomerAddress2(){
        return this.custidaddress1
    }
    get getCustomerAddress3(){
        return this.custidaddress1
    }
    get getCustomerAddress4(){
        return this.custidaddress4
    }
    get getAppointeeNino(){
        return this.appointeenino
    }
    get getAppointeeTitle(){
        return this.appointeetitle
    }
    get getAppointeeForename(){
        return this.appointeeforename
    }
    get getAppointeeSurname(){
        return this.appointeesurname
    }
    get getAppointeeAddress1(){
        return this.appointeeaddress1
    }
    get getAppointeeAddress2(){
        return this.appointeeaddress2
    }
    get getAppointeeAddress3(){
        return this.appointeeaddress3
    }
    get getAppointeeAddress4(){
        return this.appointeeaddress4
    }
    get getCustomerClaimStatus(){
        return this.custidclaimstatus
    }
    get getCustomerCountryCode(){
        return this.custidcountrycode
    }
    get getCustomerBankSortCode(){
        return this.payeebanksortcode
    }
    get getCustomerPayeeBankAccNo(){
        return this.payeebankaccno
    }
    get getCustomerSecurityQuestion1(){
        return this.securityquestion1
    }
    get getCustomerSecurityQuestion2(){
        return this.securityquestion2
    }
    get getCustomerSecurityQuestion3(){
        return this.securityquestion3
    }
    ///**************************************** */
    set setAppointeeAddress1(appointeeaddress1){
        this.appointeeaddress1 = appointeeaddress1
    }
    set setAppointeeAddress3(appointeeaddress3){
        this.appointeeaddress3 = appointeeaddress3
    }
    set setAppointeeAddress4(appointeeaddress4){
        this.appointeeaddress4 = appointeeaddress4
    }
    set setCustomerCountryCode(custidcountrycode){
        this.custidcountrycode = custidcountrycode
    }
    set setAppointeeForename(appointeeforename){
        this.appointeeforename = appointeeforename
    }
    set setCustomerClaimStatus(custidclaimstatus){
        this.custidclaimstatus = custidclaimstatus
    }
    set setAppointeeAddress2(appointeeaddress2){
        this.appointeeaddress2 = appointeeaddress2
    }
    set setCustomerBankAccNo(payeebankaccno){
        this.payeebankaccno = payeebankaccno
    }
    set setSecurityQuestion1(securityquestion1){
        this.securityquestion1 = securityquestion1
    }
    set setCustomerNino(custidnino){
        this.custidnino = custidnino
    }
    set setSecurityQuestion3(securityquestion3){
        this.securityquestion3 = securityquestion3
    }
    set setCustomerDate(custiddate){
        this.custiddate = custiddate
    }
    set setSecurityQuestion2(securityquestion2){
        this.securityquestion2 = securityquestion2
    }
    set setBankSortCode(payeebanksortcode){
        this.payeebanksortcode = payeebanksortcode
    }
    set setAppointeeSurname(appointeesurname){
        this.appointeesurname = appointeesurname
    }
    set setAppointeeTitle(appointeetitle){
        this.appointeetitle = appointeetitle
    }
    set setAppointeeNino(appointeenino){
        this.appointeenino = appointeenino
    }
    set setCustomerAddress4(custidaddress4){
        this.custidaddress4 = custidaddress4
    }
    set setCustomerAddress3(custidaddress3){
        this.custidaddress3 = custidaddress3
    }
    set setCustomerAddress2(custidaddress2){
        this.custidaddress2 = custidaddress2
    }
    set setCustomerAddress1(custidaddress1){
        this.custidaddress1 = custidaddress1
    }
    set setCustomerSex(entitlementsex){
        this.entitlementsex = entitlementsex
    }
    set setCustomerTitle(custidtitle){
        this.custidtitle = custidtitle
    }
    set setCustomerSurname(custidsurname){
        this.custidsurname = custidsurname
    }
    set setCustomerForename(custidforename){
        this.custidforename = custidforename
    }
    set setCustomerDOB(custiddob){
        this.custiddob = custiddob
    }
}
module.exports = myUser;