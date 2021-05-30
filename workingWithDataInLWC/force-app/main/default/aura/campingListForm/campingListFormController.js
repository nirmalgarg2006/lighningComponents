({
    clickCreateItem : function(component, event, helper) {
        let validCampingform = component.find('campingform').reduce(function(validSoFar,inputCmp){
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        },true);
        
        if(validCampingform){
            helper.createItem(component,component.get("v.newItem"));
        }
	}
})
