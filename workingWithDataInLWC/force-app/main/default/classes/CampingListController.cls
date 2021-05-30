public with sharing class CampingListController {
    public CampingListController() {

    }

    @AuraEnabled
    public static List<Camping_Item__c> getItems(){
        try {
            List<Camping_Item__c> lstCampingItems = [select Id, Name, Price__c, Quantity__c, Packed__c from Camping_Item__c];
            if(lstCampingItems.size() > 0){
                return lstCampingItems;
            }
            return null;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Camping_Item__c saveItem (Camping_Item__c camping){
        try {
            upsert camping;
            return camping;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
