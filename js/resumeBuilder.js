var bio = {
	"name": "Tian Xia",
	"age": 31,
	"role": "Web Developer",
	"contacts": {
		"mobile": "010-111-987",
		"email": "tian@example.com",
		"github": "ainovate",
		"twitter": "@ainovate",
		"location": "China"
	},
	"welcomeMessage": "very nice to see you.",
	"skills": ["joking", "procrastinate everyting", "playing guitar", "movie fan"],
	"biopic": "images/fry.jpg"
}

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", bio.name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var biopic = bio.biopic;
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);


var education = {
	"schools": [
	  {
		"name": "Wuhan University",
		"city": "Wuhan, CN",
		"degree": "BA",
		"major": ["Biotechnology"],
		"dates": 2004,
		"url": "http://www.whu.edu.cn"
	  }
    ],
    "onlineCourse": [
      {
      	"title": "Front-End Web Developer Nanodegree",
      	"school": "Udacity",
        "dates": 2016,  
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001" 
      }
    ]
}

var work = {
	"job": [
	  {
	  	"employer": "MyFashion",
	  	"title": "Accountant",
	  	"dates": "April 10 2013 - Future",
	  	"decription": "My job involves keeping financial records for a business."
	  }
	]
}

var project = {
	"projects": [
	  {
        "title": "Build a Portfolio Site",
	  	"dates": "March 2016",
	  	"decription": "You will be provided with a design mockup as a PDF-file and must replicate that design in HTML and CSS. You will develop a responsive website that will display images, descriptions and links to each of the portfolio projects you will complete throughout the course of the Front-End Web Developer Nanodegree.",
        "images":"images/build%20portfolio.png"
	  },
	  {
	  	"title": "Online Resume",
	  	"dates": "April 2016",
	  	"decription": "Once you've mastered the skills of a front end web developer you'll want to make a great first impression. You need a resume that stands out. The resume you build will not only help you build important skills, but will also make it easy to show employers why you’re perfect for the job.As you progress through this Nanodegree program you can update this resume with your new skills and projects.",
        "images":"images/interactive%20resume.png"
	  }
	]
}

if (bio.skills.length > 0 ) {
	$("#header").append(HTMLskillsStart);

	var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkills);
	formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkills);
}