({
	doInit : function(component,event,helper){
        let action = component.get("c.getItems");
        action.setCallback(this, function(response){
            let state = response.getState();
            if(state === 'SUCCESS'){
                component.set("v.items", response.getReturnValue());
            }
            else{
                console.log("Failed with state : " + state);
            }
        });
        $A.enqueueAction(action);
    },

    handleAddItem : function(component,event,helper){
        let action = component.get("c.saveItem");
        let item = event.getParam("item");
        console.log(event.getParam("item").Name);
        //console.log(event.getParams("item.Name"));
        action.setParams({
            "camping" : item
        })
        action.setCallback(this,function(response){
            let state = response.getState();
            if(state === 'SUCCESS'){
                alert('Record has been created');
            }
            let items = component.get("v.items");
            items.push(response.getReturnValue());
            component.set("v.items", items);

        });
        $A.enqueueAction(action);
    }

})