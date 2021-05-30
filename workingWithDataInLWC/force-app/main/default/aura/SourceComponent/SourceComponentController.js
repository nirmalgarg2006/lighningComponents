({
	executeEvent : function(component, event, helper) {
		var componentevent = component.getEvent('SourceComponent');
        alert("Source Component Event");
        componentevent.fire();
	}
})