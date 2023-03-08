//Script Include
/* Create a Classless Script Include
• Create a new function that is passed a user’s sys_id and a role as a string when it is called.
o Create a new GlideRecord object on the Roles (sys_user_role) table.
o Query for the record of the given role and retrieve the sys_id of that role.
o Create a new GlideRecord object on the User Roles (sys_user_has_role) table
o Query for the record where the user’s role assignment is stored, if he/she has the role which we are looking for, using the role’s sys_id and the user’s sys_id.
*/
function hasRoleExactly(userSysID, roleString) {
    try {

        var roleGr = new GlideRecord("sys_user_role");
        if (roleGr.get('name', roleString)) {

            var role = roleGr.getValue('sys_id');

            var gr = new GlideRecord("sys_user_has_role");
            gr.addQuery("user", userSysID);
            gr.addQuery("role", role);
            gr.query();
            if (gr.next()) {
                return true;
            } else {
                return false;
            }
        }

    } catch (err) {
        gs.error("Error in Script Include hasRoleExactly: " + error);
    }
}