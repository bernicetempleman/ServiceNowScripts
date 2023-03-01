/*
Preparation
1. Create two new fields on the Incident form.
a) Open an Incident.
b) Right-click the form's Context menu and select Configure > Form Design.
c) Select the Field Types tab on the left side of the screen.
d) Drag a True/False field to the form below the Description field.
e) Select the Edit this field (gear) icon on the right side of the field.
f) Configure the record:
Label: RCA included
Name: u_rca_included
g) Close the Properties window.
h) Drag a String field to the form below the RCA included field.
Label: RCA
Name: u_rca
Max length: 1000
i) Close the Properties window.
j) Select Save.
k) k) Close the Form Design browser tab/window.
l) Reload the Incident form to see the changes to the form.

Create the Business Rule
1. Create a new Business Rule.
Name: Lab 5.2 RCA Included
Table: Incident [incident]
Active: Selected (checked)
Advanced: Selected (checked)
When: before
Order: 125
Insert: Selected (checked)
Update: Selected (checked)
2. On the Advanced tab, within the executeRule() function in the Script field, type try followed by the <tab> key to insert the try Syntax Editor Macro (created in Lab 1.1).
3. Select the Format Code icon on the Syntax Editor toolbar to properly align the script.
4. Update the statement in the catch block to use the server-side gs.error() method instead of the client-side g_form.addErrorMessage() method.

Examine the pseudo-code for the script you will write:
• If the RCA field has no value and the RCA included checkbox is selected (checked)
o De-select the RCA included checkbox (uncheck).
• Else if the RCA field has a value and the RCA included checkbox is not selected (not checked)
o Select the RCA included checkbox (check).
*/


(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    try {
        //comment added here to prevent empty block statement alert
		if (current.u_rca.nil() && current.u_rca_included) {
			current.u_rca_included = false;
		}
		else if (!current.u_rca.nil() && !current.u_rca_included){
			current.u_rca_included = true;
		}
			
			
    } catch (err) {
        gs.error("A runtime error occurred: " + err);
    }

})(current, previous);