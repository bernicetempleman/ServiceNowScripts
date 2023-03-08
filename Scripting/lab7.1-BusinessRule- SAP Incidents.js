/*
Table: incident
when: after
insert
update
order: 150

Write a GlideRecord query to locate a set of Incidents.
• Write a second GlideRecord that:
o Runs a query to locate a set of users
o Triggers the Business Rule from one table but makes updates to records on a different table
*/

(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    var sapIncs = new GlideRecord("incident");
    sapIncs.addActiveQuery();
    sapIncs.addQuery("short_description", "CONTAINS", "SAP");
    sapIncs.query();
	
	var myLog = "";
    while (sapIncs.next()) {
        //
		myLog += sapIncs.number + ", ";
    }
	
	gs.addInfoMessage("These records are active SAP Incidents:" + myLog );


})(current, previous);