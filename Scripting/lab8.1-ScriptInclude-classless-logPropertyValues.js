/* logPropertyValues
Classless Script Include
Create a new function that will be passed a string when it is called.
o Set the debug property on the object to true.
o Set the debugPrefix property on the object to <YOUR INITIALS>:
o If the debug property is true
 Write a log message containing the debugPrefix property and the passed in string.

*/

function logPropertyValues(str) {
    this.debug = true;
    this.debugPrefix = "<BT>";

    if (this.debug) {
        gs.info(this.debugPrefix + str);
    }
}