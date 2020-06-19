@isTest
public class AccountProcessorTest {
	@isTest static void countContact()
    {
        Account acc = new Account(Name = 'Test2');
        insert acc;
        
        Contact con = new Contact(LastName = 'Contact1', AccountId=acc.Id);
        insert con;
        List<id> accountids = new List<id>();
        accountids.add(acc.Id);
        
       	test.startTest();
        AccountProcessor.countContacts(accountids);
        test.stopTest();
        
        Account acc1 = [select Number_of_Contacts__c from Account where id = :acc.id LIMIT 1];
        System.assertEquals ( Integer.valueOf(acc1.Number_of_Contacts__c) ,1);
    }
}