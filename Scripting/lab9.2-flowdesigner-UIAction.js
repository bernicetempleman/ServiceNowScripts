(function() {
	
	try {
		var inputs = {};
		inputs['incident'] = current; // GlideRecord of table: incident 
		inputs['short_description'] = current.short_description ; // String 
		inputs['description'] = current.description ; // String 

		// Start Asynchronously: Uncomment to run in background. Code snippet will not have access to outputs.
		// sn_fd.FlowAPI.getRunner().subflow('global.triggerbyui').inBackground().withInputs(inputs).run();
				
		// Execute Synchronously: Run in foreground. Code snippet has access to outputs.
		var result = sn_fd.FlowAPI.getRunner().subflow('global.triggerbyui').inForeground().withInputs(inputs).run();
		var outputs = result.getOutputs();

		// Current subflow has no outputs defined.		
	} catch (ex) {
		var message = ex.getMessage();
		gs.error(message);
	}