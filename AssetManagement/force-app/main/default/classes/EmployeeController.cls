public with sharing class EmployeeController {
    public EmployeeController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<EmpMaster__c> getEmployess(){
        return [SELECT Id, Name, AtosId__c, 
        Email__c, ContactNo__c, DeskAllocated__c, MachineAllocated__c FROM EmpMaster__c];
    }
}
