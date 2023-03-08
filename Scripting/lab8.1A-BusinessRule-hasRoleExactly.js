/*
Business rule to use classless script include
• Call the previously built Script Include two times.
o Once for the current user and the admin role
o Once for the current user and the itil role
 Write and log a debugging statement that logs the results of these two calls in the syslog table.

*/

(function executeRule(current, previous /*null when async*/ ) {
    try {
        // Add your code here
        var admin = hasRoleExactly(gs.getUserID(), 'admin');
        var itil = hasRoleExactly(gs.getUserID(), 'itil');

        var debug = "User Has Role Admin? " + admin + ' | User Has role itil? ' + itil;
        gs.info("DEBUG: " + debug);
    } catch (error) {
        gs.error("Error in Business Rule Lab 8.1A Script Include Logging: " + error);
    }

})(current, previous);