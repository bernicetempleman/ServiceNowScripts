
//Script Include
var HelloWorld = Class.create();
HelloWorld.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    alertGreeting: function() {
        return "Hello "+ this.getParameter('sysparm_user_name') + "!";
    },

    type: 'HelloWorld'
});
//Client Script
/*
• Create an instance of the GlideAjax object called HelloWorld.
• Add a param to call the alertGreeting method.
• Add a param to pass the username.
• Use the getXML method and the callback function HelloWorldParse to execute the Script Include.
• Pass the response returned from the Script Include to the callback function.
• Locate the answer variable in the returned XML and store the value in a variable.
o Generate an alert to display the value of the answerFromXML variable.
*/
function onLoad() {
    //Type appropriate comment here, and begin script below
    var ga = new GlideAjax('HelloWorld');
    ga.addParam('sysparm_name', 'alertGreeting');
    ga.addParam('sysparm_user_name', 'BT');
    ga.getXML(HelloWorldParse);

    function HelloWorldParse(response) {
        var answerFromXML = response.responseXML.documentElement.getAttribute('answer');
        alert(answerFromXML);

    }
}