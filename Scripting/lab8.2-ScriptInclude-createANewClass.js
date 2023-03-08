var LocationsByRole = Class.create();
LocationsByRole.prototype = {
    initialize: function() {
        //retrieve the logged-in user's 'User [sys_user]' record
        this.loggedInUser = new GlideRecord('sys_user');
        this.loggedInUser.get(gs.getUserID());
    },

    forCMDB: function() {
        var refQual = "";
        if (gs.hasRole('admin')) {
            //Admins may assign CIs to All locations
            refQual += "^EQ";
        }
        if (gs.hasRole('asset_mgr_local')) {
            //Users with this role may assign CIs to local locations
            refQual += "parents=" + this.loggedInUser.location.parent + "^EQ";
        }
        if (gs.hasRole('asset_mgr_corporate')) {
            //Users with this role may assign CIs to local locations
            refQual += "company=" + this.loggedInUser.location.company + "^EQ";
        }
        return refQual;
    },
    type: 'LocationsByRole'
};