function onSubmit() {
    // Preparation
    /*
    Create a new role for the Major Incident Manager.
    a) Navigate to User Administration > Roles.
    b) Select New to create a new Role.
    Name: major_inc_mgr
    Description: Role required for Major Incident Managers
    c) Select Submit.
    2. Create a new Major Incident Manager Group to identify the organization's Major Incident Managers and give the Group the major_inc_mgr Role.
    a) Open User Administration > Groups.
    b) Select New to create a new Group.
    Name: Major Incident Managers
    Description: Major Incident Managers
    c) Save the record to remain on the form.
    d) Select the Edit button on the Roles Related List and add the major_inc_mgr role to the list. 
    You may have to Search the Collection field for the role.
    */

    // 	When the form is submitted, saved, or updated
    // • If Impact and Urgency are both high and the user does not have the major_inc_mgr role
    // o Create the ans variable to store the user's response in a confirmation box asking them to ensure base information is included in the record before submitting a Priority-1 incident.
    // • If the user cancels the submission
    // o Generate an alert stating the incident was not submitted and provide instructions to use the Additional comments field if Major Incident base information is missing.
    // o Add a field message below the Category, Configuration item, Assignment group and Short description fields identifying them as Major Incident base fields.
    // • Return true or false based on the confirmation box response
	
	if (g_form.getValue('impact') == 1 && g_form.getValue('urgency') == 1 && !g_user.hasRoleExactly('major_inc_mgr')) {
		var ans = confirm(g_user.firstName +", the customer is notified of all Priority=1 Incidents. Confirm basic information is incleded before submitting this P1 incident.\n\nSelect ok to submit, or cancel to return to the record.");
		//var fname = g_user.firstName;
		if (!ans){
			
			g_form.addInfoMessage("Incident is not submitted");
			g_form.addInfoMessage("If base information is unavailable, use the 'Additional comments' field to document why it is missing.");
			
			g_form.showFieldMsg('category', "Major Incident base field");
			g_form.showFieldMsg('cmdb_ci', "Major Incident base field");
			g_form.showFieldMsg('assignment_group', "Major incident base field");
			g_form.showFieldMsg('short)description', "Major Incident base field");
		}
		return ans;
	}
   
}