(function executeRule(current, previous /*null when async*/ ) {

    /*
    Name: Lab 6.1 Set CAB Date
    Table: Change Request [change_request]
    Active: Selected (checked)
    Advanced: Selected (checked)
    When: before
    Order: 300
    Insert: Selected (checked)

    Create a GlideDateTime variable that uses a GlideSystem method to retrieve the next Monday's date.
    • Add two days, local time, to it.
    • Set the CAB date field to Wednesday of the next week.

    */
    try {
        //comment added here to prevent empty block statement alert
		var gdt = new GlideDateTime(gs.beginningOfNextWeek());
		gdt.addDaysLocalTime(2);
		current.setValue('cab_date', gdt);
    } catch (err) {
        gs.error("A runtime error occurred: " + err);
    }

})(current, previous);