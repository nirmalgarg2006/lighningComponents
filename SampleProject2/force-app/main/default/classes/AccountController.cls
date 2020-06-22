public with sharing class AccountController {
    public AccountController() {
        
    }
        @AuraEnabled(cacheable=true)
        public static List<Account> getAccountList()
        {
            List<Account> lstAccounts = [select id, name from Account];
            return lstAccounts;
        }
}

