({
    createItem  : function(component,campingitem) {
        let addItemEvent = component.getEvent("addItem");
        addItemEvent.setParams({
            "item" : campingitem
        });
        addItemEvent.fire();
        component.set("v.newItem", {
            'sobjecttype' : 'Camping_Item__c',
            'Name' : '',
            'Price__c' : 0,
            'Quantity__c' : 0,
            'Packed__c' : false
        });
    }
})
