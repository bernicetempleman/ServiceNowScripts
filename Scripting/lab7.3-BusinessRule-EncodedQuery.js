(function executeRule(current, previous /*null when async*/ ) {

    // Add your code here
    var makeVIP = new GlideRecord('sys_user');
	makeVIP.addEncodedQuery("titleLIKEVice^ORtitleLIKEVP^ORtitleLIKEChief^ORroles=itil");
    makeVIP.query();

    while (makeVIP.next()) {
        makeVIP.vip = true;
        gs.info(makeVIP.name + "with title: " + makeVIP.title + " is now a VIP.");
        makeVIP.update();
    }

})(current, previous);