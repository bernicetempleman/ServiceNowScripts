/* UI Policy
Project Requirement
Because every requirement is based on the same Incident condition, only one UI Policy is required to solve all the business problems. When an Incident’s state is Resolved or Closed:
• Make the Impact and Urgency fields read-only.
• Make the Closed by field mandatory.
• Configure an Info Message reminding users which fields are mandatory before they attempt to save a record.
A. Create a UI Policy
1. Navigate to System UI > UI Policies.
2. Create a new UI Policy.
Table: Incident [incident]
Active: Selected (checked)
Short Description: Lab 3.1 Incident Resolved or Closed
Order: 100 (if not available, configure the form to include the Order field)
Condition: State | is one of | Resolved + Closed
(Hold the 'Shift' key down to select both items in the list)
Global: Selected (checked)
On load: Not selected (not checked)
Reverse if false: Selected (checked)
Inherit: Not selected (not checked)
*/

//execute if true
function onCondition() {
	if (g_form.getValue('close_code') == '' || g_form.getValue('close_notes') == '' || g_form.getValue('resolved_by') == '') {
		g_form.addInfoMessage("REMINDER: Populate the Resolution Information fields before saving an incident in a resolved or CLosed state.")
	}
}

//execute if false
function onCondition() {
	g_form.clearMessages();
}