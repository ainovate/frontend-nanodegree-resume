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

var projects = {
	"projects": [{
		"title": "Build a Portfolio Site",
		"dates": "March 2016",
		"description": "You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
		"images": "images/protfolio.png"
	}, {
		"title": "Online Resume",
		"dates": "April 2016",
		"description": "Once you've mastered the skills of a front end web developer you'll want to make a great first impression. You need a resume that stands out. The resume you build will not only help you build important skills, but will also make it easy to show employers why you’re perfect for the job.As you progress through this Nanodegree program you can update this resume with your new skills and projects.",
		"images": "images/online%20resume.png"
	}]
};

projects.display = function() {
	projects.projects.forEach(function(project) {
		$("#projects").append(HTMLprojectStart);

		var title = HTMLprojectTitle.replace("%data%", project.title);
		$(".project-entry:last").append(title);
		var dates = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry:last").append(dates);
		var description = HTMLprojectDescription.replace("%data%", project.description);
		$(".project-entry:last").append(description);
		var images = HTMLprojectImage.replace("%data%", project.images);
		$(".project-entry:last").append(images);

	});
};

projects.display();


//----------education----------//

var education = {
	"schools": [{
		"name": "Wuhan University",
		"location": "Wuhan, CN",
		"degree": "BA",
		"majors": ["Biotechnology"],
		"dates": 2004,
		"url": "http://www.whu.edu.cn"
	}],
	"onlineCourses": [{
		"title": "Front-End Web Developer Nanodegree",
		"school": "Udacity",
		"dates": 2016,
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}]
};

education.display = function() {
	education.schools.forEach(function(education) {
		$("#education").append(HTMLschoolStart);

		var name = HTMLschoolName.replace("%data%", education.name);
		$(".education-entry:last").append(name);
		var degree = HTMLschoolDegree.replace("%data%", education.degree);
		$(".education-entry:last").append(degree);
		var dates = HTMLschoolDates.replace("%data%", education.dates);
		$(".education-entry:last").append(dates);
		var location = HTMLschoolLocation.replace("%data%", education.location);
		$(".education-entry:last").append(location);
		var majors = HTMLschoolMajor.replace("%data%", education.majors);
		$(".education-entry:last").append(majors);
		var url = HTMLschoolUrl.replace("%data%", education.url);
		$(".education-entry:last").append(url);

	});

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