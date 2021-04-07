({
    doAdd : function(cmp) {
        
        let num1 = cmp.get("v.num1");
        let num2 = cmp.get("v.num2");
        let result = parseInt(num1) + parseInt(num2);
        let output = cmp.find("addOutput");
        output.set("v.value", result);
    },

    loadContacts : function(cmp) {
        // Load all contact data
        //var accountId = cmp.get("v.recordId");
        //alert(accountId);
        cmp.set("v.contacts", null);
        //console.log(cmp.get("v.recordId"));
        var action = cmp.get("c.getContacts");
        action.setParams({
            accountId : cmp.get("v.recordId"),
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                //alert(response.getReturnValue());
                cmp.set("v.contacts", response.getReturnValue());
                //cmp.set("v.contactList", response.getReturnValue());
                //this.updateTotal(cmp);
            }

            
        });
         $A.enqueueAction(action);
    }
})