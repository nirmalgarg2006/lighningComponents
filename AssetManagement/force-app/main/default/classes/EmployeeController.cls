public with sharing class EmployeeController {
    public EmployeeController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<EmpMaster__c> getEmployess(){
        return [SELECT Id, Name, AtosId__c, 
        Email__c, ContactNo__c, DeskAllocated__c, MachineAllocated__c FROM EmpMaster__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<DeskMaster__c> getAvailableDesks(string building, string floor, string wing){
        return [SELECT Id, Name, Available__c, Building__c, Floor__c, SeatNo__c, Wing__c FROM DeskMaster__c
        where Building__c = :building and floor__c =: floor and wing__c =: wing and available__c = true];
    }
}

