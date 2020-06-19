@isTest
public class AccountManagerTest {
	@isTest static void AccountTest()
    {
        string accountid = createtestaccount();
        RestRequest request = new RestRequest();
        request.requestURI = 'https://mindful-badger-uqlblv-dev-ed.my.salesforce.com/services/apex/Accounts/'+accountid + '/contacts';
        request.httpMethod = 'GET';
        RestContext.request = request;
        Account acc = AccountManager.getAccount();
        System.assert(acc != null);
        System.assertEquals('Test1', acc.Name);
    }
    
    private static string createtestaccount()
    {
        //creating test account
        Account acc = new Account(Name = 'Test1');
        insert acc;
        Contact ccc = new Contact(LastName = 'Contact1', AccountId = acc.id);
        insert ccc;
        System.debug('Account Id ' + acc.id);
        System.debug('Contact Id ' + ccc.id);
        return acc.id;
    }
}