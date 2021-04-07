({
    handleChange : function(component, event, helper) {
        var searchText = component.get("v.searchText");
        var searchEvent = component.getEvent("searchEvent");
        searchEvent.setParams({
            SearchText : searchText
        });
        searchEvent.fire();
    }
})
