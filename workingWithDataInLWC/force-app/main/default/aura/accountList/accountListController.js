({
    doRedirect : function(component, event, helper) {
        var modalBody;
        var eventsource = event.getSource();
        var accountId = eventsource.get("v.name");
        /*
        $A.createComponent("c:accountDetails", {
            accountId : accountId
        },
           function(content, status) {
               if (status === "SUCCESS") {
                   modalBody = content;
                   component.find('overlayLib').showCustomModal({
                       header: "Account Details",
                       body: modalBody,
                       showCloseButton: true,
                       cssClass: "mymodal",
                       closeCallback: function() {
                           //alert('You closed the alert!');
                       }
                   })
               }
           });*/
        console.log(accountId);
        /*var workspaceAPI = component.find("workspace");
        var url = '/lightning/n/LWC_Visualforce_Devs' ;
        workspaceAPI.openTab({
            url:url,
            focus: true
        }).then(function(response) {
            workspaceAPI.getTabInfo({
                tabId: response
            }).then(function(tabInfo) {
            console.log("The recordId for this tab is: " + tabInfo.recordId);
            });
        }).catch(function(error) {
                console.log(error);
        });*/
        //console.log(accountName);
        var workspaceAPI = component.find("workspace");
        workspaceAPI.openTab({
            url: '/lightning/r/Account/'+ accountId + '/view',
            focus: true
        }).then(function(response) {
            console.log('Parent Tab Id ' + response);
            workspaceAPI.openSubtab({
                parentTabId: response,
                pageReference: {
                    "type": "standard__component",
                    "attributes": {
                        "componentName": "c__helloNewWorld"  // c__<comp Name>
                    },
                    "state": {
                        "uid": "1", // c__<comp attribute Name>
                    }
                },
                focus: true
            }).then(function(response) {
                console.log('Child Tab ' + response);
                workspaceAPI.setTabLabel({
                    tabId : response,
                    label : 'Hello World'
                }),
                workspaceAPI.setTabIcon({
                    tabId: response,
                    icon: "action:approval",
                    iconAlt: "Approval"
                });
            });
        }).catch(function(error) {
            console.log(error);
        });
    }
})