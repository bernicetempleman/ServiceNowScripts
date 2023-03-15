var gr_lock_out_non_admins = new GlideRecord("sys_user");
gr_lock_out_non_admins.addEncodedQuery("roles!=admin");
gr_lock_out_non_admins.query();
while (gr_lock_out_non_admins.next()) {
    gr_lock_out_non_admins.locked_out = true;
    gr_lock_out_non_admins.update();
}