trigger contactTrigger on Contact (before insert, before update) {

    if(Trigger.isBefore && Trigger.isInsert)
    {
        Contact objcontact = Trigger.New[0];
        objcontact.FirstName = objcontact.FirstName + 'Test';
    }

    if(Trigger.isBefore && Trigger.isUpdate)
    {
        Contact objcontact = Trigger.New[0];
        objcontact.FirstName = objcontact.FirstName + 'Test';
    }

    
    
}