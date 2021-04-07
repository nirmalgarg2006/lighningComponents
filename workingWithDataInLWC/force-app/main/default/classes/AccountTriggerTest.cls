@isTest
public inherited sharing class AccountTriggerTest {
   

    @istest static void CreateAccountTest(){
        List<Account> lstaccounts = new List<Account>();
        for(Integer i=0; i< 200; i++){
            Account acc = new account();
            acc.Name = 'Test ' + i;
            acc.BillingState = 'CA';
            lstaccounts.add(acc);
        }

        Test.startTest();
        insert lstaccounts;
        Test.stopTest();

        List<Account> verifyaccounts = [select id from account where BillingState = 'CA'];
        System.assertEquals(200, verifyaccounts.size());
        List<Account> verifyaccounts1 = [select id from account where ShippingState = 'CA'];
        System.assertEquals(200, verifyaccounts1.size());

    }
}