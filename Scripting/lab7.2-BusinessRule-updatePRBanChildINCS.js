/*
Table: Incident [incident] 
Active: Selected (checked) 
Advanced: Selected (checked) 
When: after 
Order: 100 
Insert: Selected (checked) 
Update: Selected (checked) 
Condition (in the Advanced tab): 
current.state.changesTo(IncidentState.CLOSED)

•	When the value of State changes to Closed
o	If the Problem field has a value
	Create a new GlideRecord object for the Problem table.
	Get the current Problem into the new GlideRecord object.
	Update the Problem's Work notes with the RCA source and current value of RCA.
o	Create a new GlideRecord object for the Incident table.
o	Query for incidents where the value of Parent Incident is the same as the current Incident.
o	Query the database.
o	While there are records returned
	Update the Child Incident's RCA field to indicate the RCA source and current value of RCA.

*/

(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    if (!current.problem_id.nil()) {
        var prbRecord = new GlideRecord('problem');
        prbRecord.get(current.problem_id);
        prbRecord.work_notes += "\n\nRCA from " + current.number + ": " + current.u_rca;
        prbRecord.update();
    }

    var childIncs = new GlideRecord('incident');
    childIncs.addQuery("parent_incident", current.sys_id);
    childIncs.query();

    while (childIncs.next()) {
        childIncs.u_rca += "RCA from " + current.number + ": " + current.u_rca;
        childIncs.update();
    }



})(current, previous);