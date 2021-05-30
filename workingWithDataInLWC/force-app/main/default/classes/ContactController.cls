public with sharing class ContactController {
	/*@AuraEnabled
    public static List<Contact> getContacts(string accountId){
        system.debug('account id - ' + accountId);
        List<Contact> contacts = 
                [SELECT Id, Name, MailingStreet, Phone, Email, LeadSource FROM Contact
                where AccountId =: accountId];
        system.debug(contacts);
        //Add isAccessible() check
        return contacts;
    }

    @AuraEnabled
    public static Contact CreateContact(Contact con, string accountId){
        try {
            con.AccountId = (Id)accountId;
            insert con;
            return con;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }*/

    @AuraEnabled(cacheable=true)
    public static List<contact> getContacts(){
        try {

            return [select Id, FirstName, LastName, Email from contact limit 10];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}