({
    handleClick : function(component, event, helper) {
        let eventsource = event.getSource();
        let labelValue = eventsource.get("v.label");
        component.set("v.message", labelValue);
    }
})