var work = {
    "jobs": [{
            "employer": "JMSC",
            "title": "Operations NCO",
            "location": "Germany",
            "dates": "2011-2015",
            "description": [
                "Provided operational support for Joint Multinational Simulation Center.",
                "Unit representative for knowledge management efforts.",
                "Responsible for coordinating resources for training units and delegating tasks assigned by higher unit."
            ]
        },
        {
            "employer": "3ID",
            "title": "Content Management NCO",
            "location": "Georgia",
            "dates": "2015 - present",
            "description": [
                "Maintains SharePoint 2013 site collections on 2 networks for division staff and subordinate units, to include permissions, site layout, and content management.",
                "did that",
                "did some more"
            ]
        }
    ]
};

var projects = {
    "projects": [{
            "name": "portal migration",
            "dates": "Oct 16 - Jan 17",
            "description": "Army division level portal migration from SP10 to SP13",
            "images": ["images/portalLogo.jpg", "images/portalSnapshot.jpg", "images/portalTemplate.jpg", "images/portalSoldier.jpg"]
        },
        {
            "name": "Jolly Humor Ice Cream",
            "dates": "June - Jul 16",
            "description": "Static website for a fictitious ice cream company",
            "images": ["images/JHlogo.jpg", "images/JHsnapshot.jpg"]
        }
    ],
    display: function() {
        for (var i = 0; i < projects.projects.length; i++) {
            var projectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].name);
            var projectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            var projectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            
            var projectImages = projects.projects[i].images.slice();
            
            for (j = 0; j < projectImages.length; j ++) {
                projectImages[j] = HTMLprojectImage.replace("%data%", projectImages[j]);
            }

            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(projectTitle);
            $(".project-entry:last").append(projectDates);
            $(".project-entry:last").append(projectDescription);
            $(".project-entry:last").append(projectImages.join(""));
            
        }
    }
};

var bio = {
    "name": "Roy Mosby",
    "role": "Content Manager",
    "welcomeMessage": "Getting design out of the way of content",
    "biography": "This is a bunch of crap about me",
    "contacts": {
        "mobile": "phone numer",
        "email": "roy.e.mosby@gmail.com",
        "githib": "egomadking",
        "twitter": "@royemosby",
        "location": "Savannah, GA"
    },
    "skills": [
        "MS Office", "HTML", "CSS", "SharePoint", "Systems design", "Business workflow development"
    ],
    "bioPic": "http://roymosby.me/images/Roy.jpg",
};

var education = {
    "schools": [{
            "name": "Southern New Hampshire University",
            "location": "Online",
            "dates": "2015-2017",
            "url": "https://snhu.edu",
            "majors": ["Bachelors of science in IT"]
        },
        {
            "name": "Art Institute Online",
            "location": "Online",
            "dates": "2006-2008",
            "url": "https://aiu.edu",
            "majors": ["Studied graphic design"]
        }
    ],
    "courses": [{
            "title": "AKMQC",
            "school": "Combined Arms Center",
            "dates": "Aug 2014",
            "url": "cac.mil",
        },
        {
            "title": "Reactive web design",
            "school": "Udacity",
            "dates": "Jul 2017",
            "url": "udacity.com",
        }
    ]
};

var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var internationalize = false;
$("#header").append(formattedPic);
$("#header").append(formattedName);
$("#header").append(formattedRole);


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
        $("#skills").append(formattedSkill);
    };
}

function displayWork() {
    for (job in work.jobs) {
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var employerTitle = formattedWorkEmployer + formattedWorkTitle;
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(employerTitle);
        $(".work-entry:last").append(formattedWorkDates);

        var descr = "";
        for (var i = 0; i < work.jobs[job].description.length; i++) {
            if (i === 0) {
                descr = work.jobs[job].description[i];
            } else {
                descr = descr + " " + work.jobs[job].description[i]
            };
        };
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", descr);
        $(".work-entry:last").append(formattedWorkDescription);
    }
}
displayWork();

$(document).click(function (loc) {
    x = event.pageX;
    y = event.pageY;
    logClicks(x, y);
});

$("#main").append(internationalizeButton);

function inName() {
    if (internationalize === false) {
        //capitalize last;
        var splitName = bio.name.split(" ");
        splitName[1] = splitName[1].toUpperCase();
        bio.name = splitName.join(" ");
        $("#name").replaceWith("<h1 id=\"name\">" + bio.name + "</h1>");
        internationalize = true;
        //return bio.name;
    } else {
        //title case last;
        var splitName = bio.name.split(" ");
        splitName[1] = splitName[1].slice(0, 1).toUpperCase() + splitName[1].slice(1).toLowerCase();
        bio.name = splitName.join(" ");
        $("#name").replaceWith("<h1 id=\"name\">" + bio.name + "</h1>");
        internationalize = false;
        //return bio.name;
    }
}

projects.display();
$("#mapDiv").append(googleMap);