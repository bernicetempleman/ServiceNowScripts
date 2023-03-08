/*

Table: incident
After insert update

Find all users with Vice, VP or Chief in their title.
b) Make the users VIPs.
Hint: VIP is a Boolean field on the User [sys_user] table. The VIP field is not displayed on the User records unless the form/list is configured.
Hint: Use the GlideRecord update() method to modify the User records.
*/

(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	var makeVIP = new GlideRecord('sys_user');
	var q1 = makeVIP.addQuery('title', 'CONTAINS', 'VP');
	q1.addOrCondition('title', 'CONTAINS', 'Vice');
	q1.addOrCondition('title', 'CONTAINS', 'Chief');
	makeVIP.query();
	while(makeVIP.next()){
		makeVIP.vip = true;
		gs.info("ADMIN: " + makeVIP.name + "with title: " + makeVIP.title +  " is now a VIP." );
		makeVIP.update();
	}

})(current, previous);