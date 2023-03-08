/*
Name: AssignmentGroupUtils
Client Callable: Selected (checked)
Accessible from: All application scopes
Active: Selected (checked)
Description: Lab 8.4 extends the AbstractAjaxProcessor class and returns the number of members in a Group.

Create a new class called AssignmentGroupUtils.
• Create an object from the new class with properties inheritable by other objects and which extends the AbstractAjaxProcessor class.
o Add a method to the new object called countGroupMembers.
 Create a new variable to store the group name.
 Store the message that the group has no members in the variable message.
 Store the sys_id of a group from a Client Script in the variable groupID.
 Create a new GlideRecord object for the sys_user_grmember table.
 Query the sys_user_grmember table to return records for all
 If there are records returned
 Store the name of the group in the variable grpName.
 If the value of grpName is not empty
 Overwrite the current value in the variable message with a string containing the name of the group and number of group members in the variable message.
 Return the variable message to the calling Client Script.
*/

//script include
var AssignmentGroupUtils = Class.create();
AssignmentGroupUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    countGroupMembers: function() {

        var grpName = "";
        var message = "There are no members in this Assignment Group";
        var groupID = this.getParameter('sysparm_group_id');

        var grpMems = new GlideRecord('sys_user_grmember');
		grpMems.addQuery('group.sys_id', groupID);
		grpMems.query();
		
		if (grpMems.next()){
			grpName = grpMems.getDisplayValue('group');
		}
		if (grpName != ""){
			message = "There are " + grpMems.getRowCount() + " members in the " + grpName + "  group";
		}
		
		return message;
		
    },
    type: 'AssignmentGroupUtils'
});


//Client Script
function onChange(control, oldValue, newValue, isLoading, isTemplate) {
    if (isLoading || newValue === '') {
       return;
    }
 
    //Type appropriate comment here, and begin script below
     
     var membersGA = new GlideAjax('AssignmentGroupUtils');
     membersGA.addParam('sysparm_name', 'countGroupMembers');
     membersGA.addParam('sysparm_group_id', g_form.getValue('assignment_group'));
     membersGA.getXML(membersParse);
     
     function membersParse(response) {
         var myObj = response.responseXML.documentElement.getAttribute('answer');
         alert(myObj);
     }
    
 }