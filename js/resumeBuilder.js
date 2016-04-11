// var name = "Tian Xia";
// var formattedName = HTMLheaderName.replace("%data%", name);

// var role = "Web Developer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// var data = 
// ["Euler", "James", "Course Developer", "myFunc"];

// $("#main").append(data.length);

var bio = {
	"name": "Tian Xia",
	"age": 31,
	"role": "Web Developer",
	"contacts": {
		"mobile": "010-111-987",
		"email": "tian@example.com",
		"github": "ainovate",
		"twitter": "@ainovate",
		"location": "China",
	},
	"welcomeMessage": "Very Nice to see you.",
	"skills": ["joking", "procrastinate all the time", "denail everything"],
	"bio pic": "images/fry.jpg",
};

$("#main").append(bio.name);