/*
Update existing UI action to ReAnalyze a Problem
table: Problem
Action name: re_analyze
Active
Show update
Form problem
requires role: problem_coordinator
Hint: Re-Analyze the Problem
Condition: new ProblemStateUtils().canReAnalyze(current);
Script:
action.setRedirectURL(current);
new ProblemStateUtils().onReAnalyze(current);

1. Navigate to Problem > All on the Application
Navigator.
2. Select a Problem.
3. On the form's Context menu (), select Configure > UI Actions.
4. Search the Name column for the UI Action Re-Analyze.
5. Select Re-Analyze.
6. Examine the pseudo-code for the script you will write:
• Read today's date into a variable.
• Read the Closed date into a variable.
• Determine the difference between today and the closed date.
• If the number of days between today and the Closed date is > 30
o Add an error message to the form page.
• else
o Allow the problem to be re-analyzed.

*/

// action.setRedirectURL(current);
// new ProblemStateUtils().onReAnalyze(current);
try {
    //comment added here to prevent empty block statement alert
	var today = new GlideDateTime();
	var closed = new GlideDateTime(current.closed_at);
	
	if (closed){
		var dateDiff = GlideDateTime.subtract(closed, today);
		var dateDiffNum =  dateDiff.getDayPart();
		
		if (dateDiffNum > 30){
			gs.addErrorMessage("A problem cannot be reopened after it has been closed for more than 30 days. Please open a new Problem.");
			
		} else {
			new ProblemStateUtils().onReAnalyze(current);
		}
		
	}
	
	
} catch (err) {
    gs.error("A runtime error occurred: " + err);
}