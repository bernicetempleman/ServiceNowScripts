function onCellEdit(sysIDs, table, oldValues, newValue, callback) {
    var saveAndClose = true;
   //Type appropriate comment here, and begin script below
      
  // 	Examine the pseudo-code for the script you will write:
  // • Create the saveAndClose variable with the value of true.
  // • If the newValue of State is Resolved, alert the user that they cannot change State to Resolved from a list and set the value of the saveAndClose variable to false.
  // • If the newValue of State is Closed, alert the user that they cannot change State to Closed from a list and set the value of the saveAndClose variable to false.
  // • Execute the callback function returning the value of saveAndClose.
  // o If true is returned, the new value of the State field is committed.
  // o If false is returned, the new value of the State field is not committed.
      
      if ( newValue == 6) { //resolved
          alert("You can not change the state to resolved from a list");
          saveAndClose = false;
          
      }
      
      if ( newValue == 7) { //closed
          alert("You can not change the state to closed from a list");
          saveAndClose = false;
      }
   
   callback(saveAndClose); 
  }