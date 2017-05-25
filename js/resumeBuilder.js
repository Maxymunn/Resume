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

var workObj = [{
	"workEmployer" : "HSBC Global Technology",
	"workTitle" : "Junior Software Analyst",
	"workDates" : "February, 2015 - Current",
	"workLocation" : "Curitiba - PR",
	"LworkDescription" : "I've been working since 2016 as a software analyst using the web language."
},{
	"workEmployer" : "Advocacia",
	"workTitle" : "Front-end Developer",
	"workDates" : "June - December, 2014",
	"workLocation" : "Curitiba - PR",
	"LworkDescription" : "I've worked as a Front-end more like web designer, creating layouts for the web application."
}];

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

var projectObj = [{
	"projectTitle" : "Resume",
	"projectDates" : "May",
	"projectDescription" : "This is a studing project provided by Udacity in their JavaScript Basics",
	"projectImage" : "http://i.imgur.com/pWU1Xbl.png"
}]

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

	//begin of bio object
	$("#header").prepend(formattedGeneral);
	$("#topContacts").append(formattedContact);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);
	$("#header").append(HTMLskillsStart);
	for (var i = bio.skills.length - 1; i >= 0; i--) {
		$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
	}

	//begin of projects array
	$("#projects").append(HTMLprojectStart);
	for (var i = projectObj.length - 1; i >= 0; i--) {
		objValues = projectObj[i];
		$(".project-entry").append(HTMLprojectTitle.replace("%data%", objValues.projectTitle));
		$(".project-entry").append(HTMLprojectDates.replace("%data%", objValues.projectDates));
		$(".project-entry").append(HTMLprojectDescription.replace("%data%", objValues.projectDescription));
		$(".project-entry").append(HTMLprojectImage.replace("%data%", objValues.projectImage));
		$("img").css({"width":"200px","height":"200px"});
	}


	//begin of work array
	$("#workExperience").append(HTMLworkStart);
	for (var i = workObj.length - 1; i >= 0; i--) {
		objValues = workObj[i];
		$(".work-entry").append(HTMLworkEmployer.replace("%data%", objValues.workEmployer) + HTMLworkTitle.replace("%data%", objValues.workTitle));
		$(".work-entry").append(HTMLworkDates.replace("%data%", objValues.workDates));
		$(".work-entry").append(HTMLworkLocation.replace("%data%", objValues.workLocation));
		$(".work-entry").append(HTMLworkDescription.replace("%data%", objValues.LworkDescription));
	}
	//begin of education schools array
	$("#education").append(HTMLschoolStart);
	for (var i = 0; i < eduObj.schools.length; i++) {
		objValues = eduObj.schools[i];

	 	$(".education-entry").append(HTMLschoolName.replace("%data%", objValues.schoolName) + HTMLschoolDegree.replace("%data%", objValues.schoolDegree));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", objValues.schoolDates));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", objValues.schoolLocation));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", objValues.schoolMajor));
	}

	//begin of education online courses array
 	$(".education-entry").append(HTMLonlineClasses.replace("%data%", objValues.schoolName));
	for (var i = 0; i < eduObj.onlineCourses.length; i++) {
		objValues = eduObj.onlineCourses[i];

 		$(".education-entry").append(HTMLonlineTitle.replace("%data%", objValues.onlineTitle) + HTMLonlineSchool.replace("%data%", objValues.onlineSchool));
		$(".education-entry").append(HTMLonlineDates.replace("%data%", objValues.onlineDates));
		$(".education-entry").append(HTMLonlineURL.replace("%data%", objValues.onlineURL).replace("#", objValues.onlineURL));
	}

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
	if($("#map").length === 0) {
		$("#mapDiv").hide();
	}
});