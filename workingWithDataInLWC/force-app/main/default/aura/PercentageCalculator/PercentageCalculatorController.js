({
    doInit : function(component, event, helper) {
        // Retrieve contacts during component initialization
        helper.loadContacts(component);
    },
    handleClick : function(component, event, helper) {
        
        var wholenumber = component.get("v.wholenumber");
        var percentage = component.get("v.percentage");
        var colors = component.get("v.colors");
        //alert(colors);
        let calpercentage = (wholenumber * percentage)/100;
        //calpercentage = calpercentage + '%';
        component.set("v.calpercentage", calpercentage);
        let age = component.find("ageinput");
        alert(age.get("v.value"));
        age.set('v.value', 65);
        //alert(component.get("v.wholenumber"));

    },

    performAdd : function(component, event, helper){
        helper.doAdd(component);
    },

    getContactsList:function(component,event,helper){
        helper.loadContacts(component);
    },
    
    doRedirect:function(component,event,helper){
        var eventSource = event.getSource();
        var id = eventSource.get('v.name');
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
          "recordId": id,
          "slideDevName": "detail"
        });
        navEvt.fire();
        //alert(id);
    },
    handleComponentEvent : function(component,event,helper){
        var contactList = component.get("v.contacts");
        var contactRecord = event.getParam("ContactRecord");
        contactList.push(contactRecord);
        component.set("v.contacts", contactList);
    }
})