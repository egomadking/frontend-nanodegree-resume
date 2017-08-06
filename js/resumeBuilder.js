/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Roy Mosby");

var formattedRole = HTMLheaderRole.replace("%data%","Information Architect");

$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);



var skills = ["system planning", "user experience", "content management", "SharePoint administration"];

var bio = {
    "fullName": "Roy Mosby",
    "role": "Life long learner",
    "contactInfo": "roy.e.mosby@gmail.com",
    "pictureURL": "http://lorempixel.com/g/400/200/food/",
    "welcomeMessage": "Sound-free for a better internet",
    "skills": skills
};

// $("#main").append(bio.fullName);
// $("#main").append(bio.role);
// $("#main").append(bio.contactInfo);
// $("#main").append(bio.pictureURL);
// $("#main").append(bio.welcomeMessage);
// $("#main").append(bio.skills);

var work = {
    "jobPosition": "Content Manager",
    "employer": "U.S. Army",
    "yearsWorked": "2001-current",
    "location": "various"
};
var education = {
    "school": "Southern New Hampshire University",
    "yearsAttended": "2015-2017",
    "degree": "Bachelors in IT",
    "location": "Online"
};

$("#main").append(education.school);
$("#main").append(work["employer"]);
