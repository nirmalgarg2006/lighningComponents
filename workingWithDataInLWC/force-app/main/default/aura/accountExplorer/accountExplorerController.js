({
    doSearch : function(component, event, helper) {
        var searchText = event.getParam("SearchText");
        var action = component.get("c.searchAccounts");
        action.setParams({
            searchText : searchText,
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.accounts", response.getReturnValue());
            }
        });
         $A.enqueueAction(action);
    }
})
