function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue == '') {
        return;
    }

    // 	• When the value of Impact changes, store the current value of State in the variable incState.
    // o If the value of incState is 1
    //  Add a decoration to the State field.
    //  Have the State label flash the color aqua.
    // o If Impact has the value High or Medium
    //  Remove the State choice list options On Hold, Resolved, Closed and Canceled.
    //  Log a message to the top of the form confirming the State options removal.
    // o Else if the form is not loading and Impact does not have the value High or Medium
    //  Clear the State choice list.
    //  Add options back to the State choice list.
    //  Set the State field to the value of incState.

    //Document the current value of State, if New, use a decoration
    var incState = g_form.getValue('state');
	alert("BT - the value of the incState is: "+ incState);

    if (incState == 1) {
		alert("BT - line 23 executed");
        g_form.addDecoration('state', 'icon-edit', 'Gathering initial details');
        g_form.flash('state', "aqua", -4);
    }

    //Take this action if the new value of Impact is 1 or 2
    if (newValue == 1 || newValue == 2) {
        g_form.removeOption('state', 3); //On Hold
        g_form.removeOption('state', 6); //Resolved
        g_form.removeOption('state', 7); //Closed
        g_form.removeOption('state', 8); //Canceled
        g_form.addInfoMessage("The State options have been removed");
    }

    //Take this action if the form is not loading the new value of Impact is NOT 1 or 2
    else if (!isLoading && newValue != 1 && newValue != 2) {
        g_form.clearOption('state');
        g_form.addOption('state', 1, 'New', 0);
        g_form.addOption('state', 2, 'In Progress', 1);
        g_form.addOption('state', 3, 'On Hold', 2);
        g_form.addOption('state', 6, 'Resolved', 3);
        g_form.addOption('state', 7, 'Closed', 4);
        g_form.addOption('state', 8, 'Canceled', 5);
        g_form.setValue('state', incState);
    }
}