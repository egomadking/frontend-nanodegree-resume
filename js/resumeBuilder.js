var data = "%data%";

var bio = {
    "name": "Roy Mosby",
    "role": "Content Manager",
    "welcomeMessage": "Getting design out of the way of content",
    "contacts": {
        "mobile": "234-804-4350",
        "email": "roy.e.mosby@gmail.com",
        "github": "egomadking",
        "twitter": "@royemosby",
        "location": "Richmond Hill, GA"
    },
    "skills": [
        "SharePoint", "Systems design", "Workflow development", "MS Office", "HTML", "CSS", "JavaScript"
    ],
    "biopic": "http://roymosby.me/images/Roy.jpg",
    display: function () {
        $("#header").prepend(HTMLwelcomeMsg.replace(data, bio.welcomeMessage));
        $("#header").prepend(HTMLheaderRole.replace(data, bio.role));
        $("#header").prepend(HTMLheaderName.replace(data, bio.name));
        $("#header").append(HTMLbioPic.replace(data, bio.biopic));

        //accessibility- adding alt for biopic
        $(".biopic").attr("alt", bio.name + ", " + bio.role);

        //link all media
        var mobile = '<a href="tel:' + bio.contacts.mobile + '">' + bio.contacts.mobile + '</a>';
        var email = '<a href="mailto:' + bio.contacts.email + '">' + bio.contacts.email + '</a>';
        var github = '<a href="https://github.com/' + bio.contacts.github + '">' + bio.contacts.github + '</a>';
        var twitter;

        if (bio.contacts.twitter.includes("@")) {
            twitter = bio.contacts.twitter.slice(1);
        } else {
            twitter = bio.contacts.twitter;
        }

        //setting global twitterName for use in Twitter feed
        twitterName = twitter;
        twitter = '<a href="https://twitter.com/' + twitter + '">@' + twitter + '</a>';

        $("#topContacts").append(HTMLmobile.replace(data, mobile));
        $("#topContacts").append(HTMLemail.replace(data, email));
        $("#topContacts").append(HTMLgithub.replace(data, github));
        $("#topContacts").append(HTMLtwitter.replace(data, twitter));
        $("#topContacts").append(HTMLlocation.replace(data, bio.contacts.location));

        $("span.white-text").children("a").addClass("contactLinks");

        // copy contents of #topContacts to #footerContacts
        $("#topContacts").children().clone().appendTo("#footerContacts");

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace(data, bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

var education = {
    "schools": [{
            "name": "Southern New Hampshire University",
            "location": "New Hampshire",
            "degree": "BS",
            "dates": "2015-2017",
            "url": "https://snhu.edu",
            "majors": ["Bachelors of science in IT"]
        },
        {
            "name": "Art Institute Online",
            "location": "Pittsburgh",
            "degree": "BA",
            "dates": "2006-2008",
            "url": "https://aiu.edu",
            "majors": ["Studied graphic design"]
        }
    ],
    "onlineCourses": [{ //using courses instead of onlineCourses to actual education
            "title": "AKMQC",
            "school": "Combined Arms Center",
            "dates": "Aug 2014",
            "url": "http://usacac.army.mil/",
        },
        {
            "title": "Reactive web design (estimated completion Nov 17)",
            "school": "Udacity",
            "dates": "Jul 2017",
            "url": "https://www.udacity.com/",
        }
    ],
    displaySchools: function () {
        for (var i = 0; i < education.schools.length; i++) {
            var schoolName = HTMLschoolName.replace(data, education.schools[i].name);
            var schoolLocation = HTMLschoolLocation.replace(data, education.schools[i].location);
            var schoolDates = HTMLschoolDates.replace(data, education.schools[i].dates);
            var schoolMajor = HTMLschoolMajor.replace(data, education.schools[i].degree);

            var degrees = education.schools[i].majors.join();
            var schoolDegrees = HTMLschoolDegree.replace(data, degrees);

            $("#education").append(HTMLschoolStart);
            $(".education-entry").last().append(schoolName + schoolDegrees + schoolDates + schoolLocation + schoolMajor);
            $(".education-entry").last().children("a").attr("href", education.schools[i].url);
        }
    },
    displayCourses: function () {
        $("#education").append(HTMLcourseClasses);
        for (var i = 0; i < education.onlineCourses.length; i++) {
            var courseTitle = HTMLcourseTitle.replace(data, education.onlineCourses[i].title);
            var courseSchool = HTMLcourseSchool.replace(data, education.onlineCourses[i].school);
            var courseDates = HTMLcourseDates.replace(data, education.onlineCourses[i].dates);

            $("#education").append(HTMLschoolStart);
            $(".education-entry").last().append(courseTitle + courseSchool + courseDates);
            $(".education-entry").last().append("<br>");
            $(".education-entry").last().children("a").attr("href", education.onlineCourses[i].url);


        }
    },
    display: function () {
        /*
        wrapper function used to satisfy the requirement
        that there is one 'display' function for education
        */
        education.displaySchools();
        education.displayCourses();
    }
};

var projects = {
    "projects": [{
            "title": "portal migration",
            "dates": "Oct 16 - Jan 17",
            "description": "Army division level portal migration from SP10 to SP13",
            "images": ["images/portalLogo.jpg", "images/portalSnapshot.jpg"],
            "link": "http://roymosby.me/projects/PortalProposal.html"
        },
        {
            "title": "Jolly Humor Ice Cream",
            "dates": "June - Jul 16",
            "description": "Static website for a fictitious ice cream company",
            "images": ["images/JHLogo.jpg", "images/JHsnapshot.jpg"],
            "link": "http://rmosby0994050.altervista.org/"
        }
    ],
    display: function () {
        for (var i = 0; i < projects.projects.length; i++) {
            var projectTitle = HTMLprojectTitle.replace(data, projects.projects[i].title);
            projectTitle = projectTitle.replace("#", projects.projects[i].link);
            var projectDates = HTMLprojectDates.replace(data, projects.projects[i].dates);
            var projectDescription = HTMLprojectDescription.replace(data, projects.projects[i].description);

            var projectImages = projects.projects[i].images.slice();

            for (j = 0; j < projectImages.length; j++) {
                var description = projects.projects[i].title + " picture " + (j + 1).toString();
                var alt = ' alt="' + description + '"';
                projectImages[j] = HTMLprojectImage.replace(data, projectImages[j]);

                //accessibility- adding in alt for each project pic
                projectImages[j] = projectImages[j].substr(0, 4) + alt + projectImages[j].substr(4, (projectImages[j].length - 4));
            }

            $("#projects").append(HTMLprojectStart);
            $(".project-entry:last").append(projectTitle);
            $(".project-entry:last").append(projectDates);
            $(".project-entry:last").append(projectDescription);
            $(".project-entry:last").append(projectImages.join(""));

        }
    }
};

var work = {
    "jobs": [{
            "employer": "USANATO",
            "title": "PABX Technician",
            "location": "Naples, Italy",
            "dates": "2009-2012",
            "description": "Private automated branch exchange technician who oversaw installation and maintenance of Promina 400 and PABX systems, enabling deployed NATO command teams to utilize both voice and data communication systems."
        },

        {
            "employer": "JMSC",
            "title": "Operations NCO",
            "location": "Grafenwoehr, Germany",
            "dates": "2012-2015",
            "description": "Provided operational support for Joint Multinational Simulation Center. Unit representative for knowledge management efforts. Responsible for coordinating resources for training units and delegating tasks assigned by higher unit."
        },
        {
            "employer": "3ID",
            "title": "Content Management NCO",
            "location": "Fort Stewart Georgia",
            "dates": "2015 - present",
            "description": "Maintains SharePoint 2013 site collections on 2 networks for division staff and subordinate units, to include permissions, site layout, and content management."
        }
    ],
    display: function () {
        for (var job = 0; job < work.jobs.length; job++) {
            var formattedWorkEmployer = HTMLworkEmployer.replace(data, work.jobs[job].employer);
            var formattedWorkTitle = HTMLworkTitle.replace(data, work.jobs[job].title);
            var employerTitle = formattedWorkEmployer + formattedWorkTitle;
            var formattedWorkDates = HTMLworkDates.replace(data, work.jobs[job].dates);
            var formattedWorkLocation = HTMLworkLocation.replace(data, work.jobs[job].location);
            var formattedWorkDescription = HTMLworkDescription.replace(data, work.jobs[job].description);

            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(employerTitle);
            $(".work-entry:last").append(formattedWorkDates);
            $(".work-entry:last").append(formattedWorkLocation);
            $(".work-entry:last").append(formattedWorkDescription);
        }
    }
};


// display resume info from objects
bio.display();
work.display();
projects.display();
education.display();


//click logger
$(document).click(function (loc) {
    x = event.pageX;
    y = event.pageY;
    logClicks(x, y);
});

//internationalize button- toggles last name between ALL-CAPS and Title-Case
var internationalize = false;
$("#main").append(internationalizeButton);

function inName() {
    var splitName;
    if (internationalize === false) {
        //ALL-CAPS last;
        splitName = bio.name.split(" ");
        splitName[1] = splitName[1].toUpperCase();
        bio.name = splitName.join(" ");
        $("#name").replaceWith("<h1 id=\"name\">" + bio.name + "</h1>");
        $("button").text("Americanize");
        internationalize = true;
    } else {
        //Title-Case last;
        splitName = bio.name.split(" ");
        splitName[1] = splitName[1].slice(0, 1).toUpperCase() + splitName[1].slice(1).toLowerCase();
        bio.name = splitName.join(" ");
        $("#name").replaceWith("<h1 id=\"name\">" + bio.name + "</h1>");
        $("button").text("Internationalize");
        internationalize = false;
    }
}

//inserts Google Map
$("#mapDiv").append(googleMap);

//inserts Twitter feed
var twitterName; //Global so bio.display() has access to this variable

function twitterFeed() { //wrapper function to prevent hoisting issues
    var twitterUrl = '<a class="twitter-timeline" href="https://twitter.com/' + twitterName + '">Tweets by' + twitterName + '</a>';
    $(".map-twitter-wrapper").append('<div class="twitterDiv">' + twitterUrl + '</div>');
}
twitterFeed();