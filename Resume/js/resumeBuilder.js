var skills = ["HTML5", "CSS3", "JavaScript", "UI"];
var bio = {
	"name" : "Rodrigo Max Felipe",
	"age" : 26,
	"skills" : skills,
	"role" : "Web Developer",
	"email" : "maxymunn@gmail.com"
};


$(function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole)
	$("#header").prepend(formattedName);

	if($(".flex-item").length === 0) {
		$("#topContacts").hide();
	}
	if($("h1").length == 0) {
		$("header").hide();
	}
	if($(".work-entry").length === 0) {
		$("#workExperience").hide();
	}
	if($(".project-entry").length === 0) {
		$("#projects").hide();
	}
	if($(".education-entry").length === 0) {
		$("#education").hide();
	}
	if($(".flex-item").length === 0) {
		$("#lets-connect").hide();
	}
	if($("#map") === null) {
		$("#mapDiv").hide();
	}
});