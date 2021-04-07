public with sharing class queryAccounts {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> queryAccounts(String searchKey){
        String key = '%' + searchKey +'%';
        try 
        {
            List<Account> lstAccounts = 
            [SELECT Id, Name, Phone, AccountNumber
            FROM Account
            WHERE Name LIKE :key
            WITH SECURITY_ENFORCED
            LIMIT 10];
            return lstAccounts;
        } catch (Exception e) 
        {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
