({
    doInit : function(component, event, helper) {
        component.set("v.PersonName", "Nirmal Garg");
    },
    getEnclosingTabId : function(component, event, helper) {
        var tabid = '';
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getEnclosingTabId().then(function(tabId) {
            workspaceAPI.setTabLabel({
                tabId : tabId,
                label : 'Nirmal Garg'
            }),
            workspaceAPI.setTabIcon({
                tabId: tabId,
                icon: "action:approval",
                iconAlt: "Approval"
            });
       })
        .catch(function(error) {
            console.log(error);
        });
    }
})