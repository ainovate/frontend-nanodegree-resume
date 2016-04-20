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
	"welcomeMessage": "Very nice to see you.",
	"skills": ["joking", "procrastinate everyting", "playing guitar", "movie fan"],
	"biopic": "images/fry.jpg"
}

var name = bio.name;
var formattedName = HTMLheaderName.replace("%data%", bio.name);

var role = bio.role;
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var mobile = bio.contacts.mobile;
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
$("#topContacts").append(formattedMobile); 

var email = bio.contacts.email;
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
$("#topContacts").append(formattedEmail); 

var github = bio.contacts.github;
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
$("#topContacts").append(formattedGithub); 

var twitter = bio.contacts.twitter;
var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
$("#topContacts").append(formattedTwitter); 

var _location = bio.contacts.location;
var formattedLocation = HTMLlocation.replace("%data%",_location);
$("#topContacts").append(formattedLocation);


var biopic = bio.biopic;
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

var welcomeMsg = bio.welcomeMessage;
var formattedMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
$("#header").append(formattedMsg);

var skills = bio.skills;
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);



//----------work----------//

var work = {
	"job": [
	  {
	  	"employer": "MyFashion",
	  	"title": "Accountant",
	  	"dates": "2013 - present",
	  	"location": "Nantong JS",
	  	"decription": "My job involves keeping financial records for a business."
	  },
	  {
	  	"employer": "Freelance",
	  	"title": "Gift design",
	  	"dates": "2000 - 2013",
	  	"location": "Nantong JS",
	  	"decription": "Make individual gift desgin for client."
	  }
	]
}

var employer = work.job[0].employer;
var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.job[0].employer);
$("#workExperience").append(formattedworkEmployer);

var title = work.job[0].title;
var formattedworkTitle = HTMLworkTitle.replace("%data%", work.job[0].title);
$("#workExperience").append(formattedworkTitle);

var dates = work.job[0].dates;
var formattedworkDates = HTMLworkDates.replace("%data%", work.job[0].dates);
$("#workExperience").append(formattedworkDates);

var _location = work.job[0].location;
var formattedworkLocation = HTMLworkLocation.replace("%data%", _location);
$("#workExperience").append(formattedworkLocation);

var decription = work.job[0].decription;
var formattedworkDecription = HTMLworkDescription.replace("%data%", work.job[0].decription);
$("#workExperience").append(formattedworkDecription);
$("#workExperience").append(HTMLworkStart);


//----------project----------//

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

//----------education----------//

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