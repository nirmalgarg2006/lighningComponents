({
    doAction : function(component, event, helper) {
        var params = event.getParam('arguments');
        if(params){
            alert(params.param1);
            alert(params.param2);
        }
    }
})