public inherited sharing class AccountTriggerHandler {
    
    public static void CreateAccounts(List<Account> lstAccunts) {
        for(Account acc : lstAccunts){
            acc.ShippingState = acc.BillingState;
        }
    }
}