var skills = ["HTML5", "CSS3", "JavaScript", "UI"];
var bio = {
	"name" : "Rodrigo Max Felipe",
	"age" : 26,
	"skills" : skills,
	"role" : "Web Developer",
	"bioPic" : "https://api.sololearn.com/Uploads/Avatars/4296217.jpg",
	"contactInfo" : {
		"mobile" : "(41)9 8465-2194",
		"github" : "Maxymunn",
		"email" : "maxymunn@gmail.com",
		"twitter" : "@Maxymunn",
		"location" : "Curitiba - PR"
	},
	"welcomeMessage" : "Hey there, welcome to my resumé!!"
};

var workObj = {
	"workEmployer" : "HSBC Global Technology",
	"workTitle" : "Junior Software Analyst",
	"workDates" : "February, 2015 - Current",
	"workLocation" : "Curitiba - PR",
	"LworkDescription" : "I've been working since 2016 as a software analyst using the web language."
};

var eduObj = {
	"schools": [{
		"schoolName": "Universidade Tuiuti do Paraná",
		"schoolDegree": "Software Analysis and Development",
		"schoolDates": "2012 - 2017",
		"schoolLocation": "Curitiba - PR",
		"schoolMajor": " - "
	}, {
		"schoolName": "Colégio Estadual Prieto Martinez",
		"schoolDegree": "College",
		"schoolDates": "2005 - 2008",
		"schoolLocation": "Curitiba - PR",
		"schoolMajor": " - "
	}],
	"onlineCourses": [{
		"onlineTitle": "HTML5",
		"onlineSchool": "SoloLearn",
		"onlineDates": "march - may 2017",
		"onlineURL": "https://www.sololearn.com/Play/HTML"
	}, {
		"onlineTitle": "CSS3",
		"onlineSchool": "SoloLearn",
		"onlineDates": "may - jun 2017",
		"onlineURL": "https://www.sololearn.com/Play/CSS"
	}]
}

$(function() {
	var objNames = Object.getOwnPropertyNames(eduObj.schools[0]);
	var objValues;
	//variables of personal information
	var formattedGeneral = HTMLheaderName.replace("%data%", bio.name);
	formattedGeneral += HTMLheaderRole.replace("%data%", bio.role);
	var formattedContact = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
	formattedContact += HTMLemail.replace("%data%", bio.contactInfo.email);
	formattedContact += HTMLgithub.replace("%data%", bio.contactInfo.github);
	formattedContact += HTMLtwitter.replace("%data%", bio.contactInfo.twitter);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedSkills = HTMLskills.replace("%data%", bio.skills);

	$("#header").prepend(formattedGeneral);
	$("#topContacts").append(formattedContact);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);
	$("#header").append(HTMLskillsStart);
	for (var i = bio.skills.length - 1; i >= 0; i--) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}

	$("#workExperience").append(HTMLworkStart);
	$(".work-entry").append(HTMLworkEmployer.replace("%data%", workObj["workEmployer"]) + HTMLworkTitle.replace("%data%", workObj["workTitle"]));
	$(".work-entry").append(HTMLworkDates.replace("%data%", workObj["workDates"]));
	$(".work-entry").append(HTMLworkLocation.replace("%data%", workObj.workLocation));
	$(".work-entry").append(HTMLworkDescription.replace("%data%", workObj.LworkDescription));
	$("#education").append(HTMLschoolStart);

	for (var i = 0; i <= eduObj.schools.length; i++) {
		objValues = Object.values(eduObj.schools[i]);
	 	for (var i = 0; i <= objValues.length; i++) {
	 		objValues[i]
	 		$(".education-entry").append(HTMLschoolName.replace("%data%", objValues[i])) + HTMLschoolDegree.replace("%data%", objValues[i]);
	 	}
	}
	$(".education-entry").append(HTMLschoolName.replace("%data%", eduObj.schools[0]) + HTMLschoolDegree.replace("%data%", eduObj["schoolDegree"]));
	$(".education-entry").append(HTMLschoolDates.replace("%data%", eduObj["schoolDates"]));
	$(".education-entry").append(HTMLschoolLocation.replace("%data%", eduObj["schoolLocation"]));

	if($(".flex-item").length === 0) {
		$("#topContacts").hide();
	}
	if($("h1").length == 0) {
		$("#header").hide();
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
		$("#mapDiv").show();
	}
});