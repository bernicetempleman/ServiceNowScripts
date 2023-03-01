// practice script debugging

current.short_description = "This text set by the Lab 5.1 Business Rule Debugging BR";
var myNum = current.state;

//Advise logged in user when Incident was created
var priorityValue = current.priority;
var createdValue = current.sys_created_on;

SlaTargetNotification(priorityValue,createdValue);


// The function in this try/catch is not defined
try{
	thisFunctionDoesNotExist();
}
catch(err){
	gs.info("bt!!!: a JavaScript runtime error occurred - " + err);
}

// This function is not defined and is not part of a try/catch
thisFunctionAlsoDoesNotExist();



// getNum and setNum demonstrate JavaScript Closure
var x = 7;

function numFunc(){
	var x = 10;
	
	return{
		getNum: function(){
			return x;
		},
		setNum: function(newNum){
			x = newNum;
		}
	};
}

var callFunc = numFunc();
callFunc.getNum();
callFunc.setNum(2);
callFunc.getNum();