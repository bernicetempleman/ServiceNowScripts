function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    //Type appropriate comment here, and begin script below

    var membersGA = new GlideAjax('AssignmentGroupUtils');
    membersGA.addParam('sysparm_name', 'assignAnalyst');
    membersGA.addParam('sysparm_group_id', g_form.getValue('assignment_group'));
    membersGA.getXMLAnswer(membersParse);

    function membersParse(response) {
        var members = JSON.parse(response);

        if (members.length > 0) {
            var randomNum = Math.floor(Math.random() * members.length);
            g_form.setValue('assigned_to', members[randomNum].sys_id, members[randomNum].name);
        } else {
			g_form.setValue('assigned_to', "");
			alert("The Assignment group has no users assigned to it.");
		}

       
    }

}

//client script
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    //Type appropriate comment here, and begin script below

    var membersGA = new GlideAjax('AssignmentGroupUtils');
    membersGA.addParam('sysparm_name', 'assignAnalyst');
    membersGA.addParam('sysparm_group_id', g_form.getValue('assignment_group'));
    membersGA.getXMLAnswer(membersParse);

    function membersParse(response) {
        var members = JSON.parse(response);

        if (members.length > 0) {
            var randomNum = Math.floor(Math.random() * members.length);
            g_form.setValue('assigned_to', members[randomNum].sys_id, members[randomNum].name);
        } else {
			g_form.setValue('assigned_to', "");
			alert("The Assignment group has no users assigned to it.");
		}

       
    }

}