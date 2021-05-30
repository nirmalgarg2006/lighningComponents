({
	packItem : function(component, event, helper) {
		component.set("v.item.Packed__C", true);
        component.set("v.disabled", true);
	}
})