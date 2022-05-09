({
	init : function (cmp) {
        var flow = cmp.find("flow");
        var inputVariables = [
        {
            name : 'firstname',
            type : 'String',
            value : 'Nirmal'
        },
        {
            name : 'lastname',
            type : 'String',
            value : 'Garg'
        }
        ];
        flow.startFlow("test_flow_issue", inputVariables);
    },

    statusChange : function (cmp, event) {
        if (event.getParam('status') === "FINISHED") {
            console.log('flow finished');
        }
        if(event.getParam('status') === "STARTED"){
            console.log('flow started');
        }
    }
})