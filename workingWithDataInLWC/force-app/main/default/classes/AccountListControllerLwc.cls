public with sharing class AccountListControllerLwc {

    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccountsByRevenue(Decimal annualRevenue){
        try {
            List<Account> lstAccounts = [select name from Account where AnnualRevenue >= :annualRevenue];
            return lstAccounts;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
