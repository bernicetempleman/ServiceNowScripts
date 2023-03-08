/*
Name: Lab 8.1 Script Include Logging
Table: Incident [incident]
Active: Selected (checked)
Advanced: Selected (checked)
When: after
Insert: Selected (checked)
Update: Selected (checked)

For the properties in the current object
o If the property has a value
 Call the Logging Script Include function with the concatenated string.
 Set the property and the property value.
*/
function logPropertyValues(str) {
    this.debug = true;
    this.debugPrefix = "<BT>";

    if (this.debug) {
        gs.info(this.debugPrefix + str);
    }
}

/* Business Rule*/
(function executeRule(current, previous /*null when async*/) {

	// Add your code here
	for (var property in current){
		if (current[property]){
			logPropertyValues(property + ", " + current[property]);
		}
	}

})(current, previous);