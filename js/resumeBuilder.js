/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", "Roy Mosby");

var formattedRole = HTMLheaderRole.replace("%data%","Information Architect");

$("#main").prepend(formattedRole);
$("#main").prepend(formattedName);
