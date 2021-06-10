trigger AccountTrigger on Account (before insert, before update, after insert, after update) {
    if(Trigger.isBefore && Trigger.isInsert){
        AccountTriggerHandler.CreateAccounts(Trigger.new);
    }

    if(Trigger.isInsert && Trigger.isAfter){
        List<Contact> lstContact = new List<Contact>();
        for(Account a : Trigger.New){
            Contact c = new Contact();
            c.LastName = 'Hello World';
            c.FirstName = 'Hello';
            c.accountId = a.Id;
            lstContact.add(c);
        }
        insert lstContact;

        Feeditem accountPost = new Feeditem();
        accountPost.parentId = Trigger.new[0].Id;
        accountPost.body = 'Hello world';
        insert accountPost;
    }
    if(Trigger.isUpdate && Trigger.isAfter){

        for(Account oldAcc : Trigger.new){
            if(oldAcc.NumberOfEmployees == 0){
                oldAcc.addError('Number of employees cannot be 0');
            }
        }
        List<Contact> lstContact = new List<Contact>();
        for(Account a : Trigger.New){
            Contact c = new Contact();
            c.LastName = 'Hello World';
            c.FirstName = 'Hello';
            c.accountId = a.Id;
            lstContact.add(c);
        }
        insert lstContact;
    }
}