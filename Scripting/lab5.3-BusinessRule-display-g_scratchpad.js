/*Write a script using g_scratchpad global object, Display Business Rules, and dot-walking.
A. Create a Business Rule
1. Create a new Business Rule.
Name: Lab 5.3 Display Business Rule
Table: Incident [incident]
Active: Selected (checked)
Advanced: Selected (checked)
When: display
Order: 150
2. Examine the pseudo-code for the script you will write:
• Add the current record's Resolved By reference object's First Name to the g_scratchpad object.
• Add the current record's Resolved By reference object's Last Name to the g_scratchpad object.
• If there is no value in reopen_count
o Set the g_scratchpad.reopenCount's value to zero.
• Else
o Add the current record's Reopen Count to the g_scratchpad object.
*/

(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	g_scratchpad.resolvedByFirstName = current.resolved_by.first_name;
	g_scratchpad.resolvedByLastName = current.resolved_by.last_name;
	
	if (current.reopen_count.nil()) {
		g_scratchpad.reopenCount = "0";
	} else {
		g_scratchpad.reopenCount = current.reopen_count;
	}

})(current, previous);