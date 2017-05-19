$(function() {
	var email = "maxymunn@gmail.com";
	var name = "Rodrigo Max Felipe";
	var role = "Web Developer";
	var formattedName = HTMLheaderName.replace("%data%", name);
	var formattedRole = HTMLheaderRole.replace("%data%", role);

	$("#header").prepend(formattedRole)
	$("#header").prepend(formattedName);
});