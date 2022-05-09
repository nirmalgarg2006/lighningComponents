({
    onTabFocused : function(component, event, helper) {
        var focusedTabId = event.getParam('currentTabId');
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getTabInfo({
            tabId: focusedTabId
        }).then(function(response) {
            console.log(response.recordId);
        });
    }
})
