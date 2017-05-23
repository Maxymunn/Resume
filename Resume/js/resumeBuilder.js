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
	"workDates" : "February, 2015 - Future",
	"workLocation" : "Curitiba - PR",
	"LworkDescription" : "I've worked since 2016 as a software analyst using the web language."
}

var eduObj = {
	"schoolName" : "Universidade Tuiuti do Paraná",
	"schoolDegree" : "Software Analysis and Development",
	"schoolDates" : "2012 - 2017",
	"schoolLocation" : "Curitiba - PR",
	"schoolMajor" : " - "
}

$(function() {
	var objNames = Object.getOwnPropertyNames(bio.contactInfo);

	//variables of personal information
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	var formattedGitHub = HTMLgithub.replace("%data%", bio.contactInfo.github);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contactInfo.twitter);

	$("#header").append(HTMLbioPic.replace("%data%", bio.bioPic));
	$("#header").append(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").append(HTMLemail.replace("%data%", bio.contactInfo.email));
	$("#header").append(HTMLmobile.replace("%data%", bio.contactInfo.mobile));
	$("#header").append(HTMLtwitter.replace("%data%", bio.contactInfo.twitter));
	$("#header").append(HTMLgithub.replace("%data%", bio.contactInfo.github));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	$("#workExperience").append(HTMLworkStart);
	$("#workExperience").append(HTMLworkEmployer.replace("%data%", workObj["workEmployer"]) + HTMLworkTitle.replace("%data%", workObj["workTitle"]));
	$("#workExperience").append(HTMLworkDates.replace("%data%", workObj["workDates"]));
	$("#workExperience").append(HTMLworkLocation.replace("%data%", workObj.workLocation));
	$("#workExperience").append(HTMLworkDescription.replace("%data%", workObj.LworkDescription));
	$("#education").append(HTMLschoolStart);
	$("#education").append(HTMLschoolName.replace("%data%", eduObj["schoolName"]) + HTMLschoolDegree.replace("%data%", eduObj["schoolDegree"]));
	$("#education").append(HTMLschoolDates.replace("%data%", eduObj["schoolDates"]));
	$("#education").append(HTMLschoolLocation.replace("%data%", eduObj["schoolLocation"]));


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