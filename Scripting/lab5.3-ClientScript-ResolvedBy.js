/*
Create a new Client Script.
Name: Lab 5.3 ResolvedBy Client Script
Table: Incident [incident]
UI Type: Desktop
Type: onChange
Field name: State
Active: Selected (checked)
Inherited: Not selected (not checked)
Global: Selected (checked)
2. Examine the pseudo-code for the script you will write:
• When the State field changes
o If the old State is Resolved, Closed or Canceled and the new State is not Resolved, Closed or Canceled
 Display a confirmation box stating the Incident was previously resolved by <user who closed the record> and how many times the Incident has been reopened. Confirm the user really wants to reopen.
 If the user cancels reopening the Incident
 Set the State back to the old State value.
*/

function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
        return;
    }

    //Type appropriate comment here, and begin script below
    if (oldValue > 5 && newValue <= 5) {
        var answer = confirm("This incident was resolved by " + g_scratchpad.resolvedByFirstName + " " + g_scratchpad.resolvedByLastName + " and has been reopened " + g_scratchpad.reopenCount + " time. \n\nAre ypu sure you want to reopen it?");
        if (answer == false) {
            g_form.setValue('state', oldValue);
        }
    }
}