public with sharing class accountSearchController {
    public accountSearchController() {

    }

    @AuraEnabled
    public static list<sObject> searchAccounts(string searchText){
        try 
        {
            string query='';
            string likeparam = '%' + searchText + '%';
            if(searchText != null){
                query = 'select Id, Name, Website, Phone, Industry from Account where Name like :likeparam limit 50';
            }
            else {
                query = 'select Id, Name, Website, Phone, Industry from Account limit 50';
            }
            List<sObject> sObjectList = Database.query(query);
            return sObjectList;
        } 
        catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
