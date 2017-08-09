var work = {
    "jobs": [
        {
            "employer": "JMSC",
            "title": "Operations NCO",
            "location": "Germany",
            "dates": "2011-2015",
            "description": [
                "Provided operational support for Joint Multinational Simulation Center.",
                "Unit representative for knowledge management efforts",
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
    "projects": [
        {
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
    ]
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
    "schools": [
        {
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
    "courses": [
        {
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

for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var employerTitle = formattedWorkEmployer + formattedWorkTitle;
    $(".work-entry:last").append(employerTitle);
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedName);
$("#header").append(formattedRole);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i= 0; i<bio.skills.length; i++){
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);
    };
}

