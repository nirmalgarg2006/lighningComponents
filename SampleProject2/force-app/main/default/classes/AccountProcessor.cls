public class AccountProcessor {
    @future
	public static void countContacts(List<id> accountids)
    {
        List<account> accounts = [select id, name,(select id, name from contacts) from account where id in :accountids];
        for(Account acc : accounts)
        {
            List<Contact> lstContacts = acc.contacts;
            acc.Number_of_Contacts__c = lstContacts.size();
        }
        update accounts;
    }
}