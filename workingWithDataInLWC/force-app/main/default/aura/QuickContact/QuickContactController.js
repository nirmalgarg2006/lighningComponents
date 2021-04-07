({
    doSave : function(component, event, helper) {
        var action = component.get("c.CreateContact");
        action.setParams({
            con : component.get("v.CreateContact"),
            accountId : component.get("v.accountId")
        });
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            var toastEvent = $A.get("e.force:showToast");
            if(state === 'SUCCESS' || state === 'DRAFT'){
                var responsevalue = response.getReturnValue();
                var componentEvent = component.getEvent("quickContactEvent");
                componentEvent.setParams({
                    ContactRecord : responsevalue
                });
                componentEvent.fire();
            }
            else if(state === 'INCOMPLETE'){

            }
            else if(state === 'ERROR'){

            }
        },'ALL');
        $A.enqueueAction(action);
    }
})
