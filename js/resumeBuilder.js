//---------bio----------//

var bio = {
	"name": "Tian Xia",
	"age": 31,
	"role": "Web Developer",
	"contacts": {
		"mobile": "010-111-987",
		"email": "tian@example.com",
		"github": "ainovate",
		"twitter": "@ainovate",
		"location": "ShangHai"
	},
	"welcomeMessage": "Shut up and take my money!",
	"skills": ["joking", "procrastinate everyting", "playing guitar", "movie fan"],
	"biopic": "images/fry.jpg"
}

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(welcomeMessage);
	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	$("#header").append(formattedBioPic);

	if (bio.skills.length > 0) {

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
	}
};

bio.display();



//----------work----------//

var work = {
	"jobs": [{
		"employer": "MyFashion",
		"title": "Accountant",
		"dates": "2013 - present",
		"location": "Nantong JS",
		"description": "My job involves keeping financial records for a business."
	}, {
		"employer": "Freelance",
		"title": "Gift design",
		"dates": "2000 - 2013",
		"location": "Nantong JS",
		"description": "Make individual gift desgin for client."
	}]
}

work.display = function() {
	work.jobs.forEach(function(job) {
		$("#workExperience").append(HTMLworkStart);
		var employer = HTMLworkEmployer.replace("%data%", job.employer);
		var title = HTMLworkTitle.replace("%data%", job.title);
		var dates = HTMLworkDates.replace("%data%", job.dates);
		var city = HTMLworkLocation.replace("%data%", job.location);
		var description = HTMLworkDescription.replace("%data%", job.description);
		var employerTitle = employer + title + dates + city + description;
		$(".work-entry:last").append(employerTitle);
	});
};

work.display();


//----------project----------//

var project = {
	"projects": [{
		"title": "Build a Portfolio Site",
		"dates": "March 2016",
		"decription": "You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
		"images": "images/build%20portfolio.png"
	}, {
		"title": "Online Resume",
		"dates": "April 2016",
		"decription": "Once you've mastered the skills of a front end web developer you'll want to make a great first impression. You need a resume that stands out. The resume you build will not only help you build important skills, but will also make it easy to show employers why you’re perfect for the job.As you progress through this Nanodegree program you can update this resume with your new skills and projects.",
		"images": "images/interactive%20resume.png"
	}]
}

project.display = function() {
	project.projects.forEach(function(pro) {
		$("#project").append(HTMLprojectStart);
		var title = HTMLprojectTitle.replace("%data%", project.projects.title)
		$(".project-entry:last").append(title);
		var dates = HTMLprojectDates.replace("%data%", project.projects.dates)
		$(".project-entry:last").append(dates);



	});
};

project.display();

//----------education----------//

var education = {
	"schools": [{
		"name": "Wuhan University",
		"city": "Wuhan, CN",
		"degree": "BA",
		"major": ["Biotechnology"],
		"dates": 2004,
		"url": "http://www.whu.edu.cn"
	}],
	"onlineCourse": [{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}]
}

education.display = function() {
	$("#education").append(HTMLschoolStart);
	for (var school in education.schools) {
		var name = HTMLschoolName.replace("%data%", education.schools[school].name);
		var degree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var dates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var city = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		var majors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		var url = HTMLschoolUrl.replace("%data%", education.schools[school].url);
		$(".education-entry:last").append(name + degree + dates + city + majors + url);
	}

	$("#education").append(HTMLonlineClasses);
	for (var online in education.online) {
		$("#education").append(HTMLschoolStart);
		var title = HTMLonlineTitle.replace("%data%", education.online[online].title);
		var school = HTMLonlineSchool.replace("%data%", education.online[online].school);
		var date = HTMLonlineDates.replace("%data%", education.online[online].date);
		var url = HTMLonlineURL.replace("%data%", education.online[online].url);
		$(".education-entry:last").append(title, school, date, url);
	}
};

education.display();

$("#mapDiv").append(googleMap);