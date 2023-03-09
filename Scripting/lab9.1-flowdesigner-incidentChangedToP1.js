
var gdt = new GlideDateTime(fd_data.trigger.current.opened_at);
gdt.addDays(+2);

return " To be completed by: " + gdt.getDate() + "!";