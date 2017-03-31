/*
This is empty on purpose! Your code to build the resume will go here.
 */

  //$("#main").append("Ahmed");

/*  var awesomeThoughts= "I am Ahmed and I am AWESOME!";
  console.log(awesomeThoughts);

  var funThoughts=awesomeThoughts.replace("AWESOME","FUN");
  console.log(funThoughts);

  $("#main").append(funThoughts);
*/

/*var name="Ahmed Dev";
var role="Applications Developer";
var formattedName=HTMLheaderName.replace("%data%",name);
var formattedRole=HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);


var skills =["C#", "Asp.Net", "Web Development"];
*/


var bio={
  "name":"Ahmed Dev",
  "role":"Applications Developer",
  "contacts":{
    "mobile":"0594 876 456",
    "email":"Ahmed@AhmedDev.com",
    "github":"AhmedDev9",
    "location":"Riyadh, KSA"
  },
  "welcomeMessage":"Welcome to my resume.",
  "skills": ["C#", "Asp.Net", "Web Development","MS SharePoint"],
  "bioPic":"images/bioPic.png"
};


var education={
  "schools":[
    {
  "name":"King Saud University",
  "location":"King Saud University, Riyadh",
  "degree":"bachelor",
  "majors":["Information Systems"],
  "dates":"2010-2015",

    }
],
  "onlineCourses":[
    {
      "title":"Front-End Development",
      "school":"Udacity",
      "dates":"2017",
      "url":"https://www.Udacity.com"

    }
  ]
};

var work={
  "jobs":[
    {
  "title":"Applications Developer",
  "employer":"Advanced Electronics Company",
  "location":"King Khaled International Airport, Riyadh",
  "dates":"2015-Present",
  "description":"Applications Development Team. Applications Development Team. Applications Development Team. Applications Development Team.",
  "years":2.2
}
]

};


var projects={
  "projects":[
  {
  "title":"Project 1",
  "dates":"2015",
  "description":"Project is project. blah blah blah blah blah blah blah blah blah blah ....",
  "images":[
    "images/197x148.gif",
    "images/197x148.gif"
  ]
}
]};

bio.display=function() {
  var formattedName=HTMLheaderName.replace("%data%",bio.name);
  var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
  var formattedMobile=HTMLmobile.replace("%data%",bio.contacts.mobile);
  var formattedEmail=HTMLemail.replace("%data%",bio.contacts.email);
  var formattedGithub=HTMLgithub.replace("%data%",bio.contacts.github);
  var formattedLocation=HTMLlocation.replace("%data%",bio.contacts.location);
  var formattedBioPic=HTMLbioPic.replace("%data%",bio.bioPic);
  var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

  var formattedWelcomeMsg=HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);

  $("#footerContacts").prepend(formattedLocation);
  $("#footerContacts").prepend(formattedGithub);
  $("#footerContacts").prepend(formattedEmail);
  $("#footerContacts").prepend(formattedMobile);

  $("#topContacts").prepend(formattedLocation);
  $("#topContacts").prepend(formattedGithub);
  $("#topContacts").prepend(formattedEmail);
  $("#topContacts").prepend(formattedMobile);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);

  $("#header").append(formattedBioPic);
  $("#header").append(formattedWelcomeMsg);
  $("#header").append(HTMLskillsStart);

  for(var i=0;i<bio.skills.length;i++){
    var formattedSkill=HTMLskills.replace("%data%",bio.skills[i]);
    $("#skills").append(formattedSkill);

  }


}

education.display=function() {
  $("#education").append(HTMLschoolStart);
  for(var i=0;i<education.schools.length;i++){

    var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[i].name);
    $(".education-entry:last").append(formattedSchoolName);

    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
    $(".education-entry:last").append(formattedSchoolDegree);

    var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
    $(".education-entry:last").append(formattedSchoolDates);

    var formattedSchoollocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
    $(".education-entry:last").append(formattedSchoollocation);

for(var j=0;j<education.schools[i].majors.length;j++){
    var formattedSchoolmajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors[j]);
    $(".education-entry:last").append(formattedSchoolmajor);
}

}
$(".education-entry:last").append(HTMLonlineClasses);
for(var i=0;i<education.onlineCourses.length;i++){
  var formattedCourseTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[i].title);
  $(".education-entry:last").append(formattedCourseTitle);
  console.log("1");

  var formattedCourseSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school);
  $(".education-entry:last").append(formattedCourseSchool);

  var formattedCourseDates = HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates);
  $(".education-entry:last").append(formattedCourseDates);

  var formattedCourseUrl = HTMLonlineURL.replace("%data%",education.onlineCourses[i].url);
  $(".education-entry:last").append(formattedCourseUrl);

}
}


work.display=function() {
  for(var i=0;i<work.jobs.length;i++){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
    var formattedEmployerTitle= formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);

    var formattedDates=HTMLworkDates.replace("%data%",work.jobs[i].dates)
    $(".work-entry:last").append(formattedDates);

    var formattedlocation=HTMLworkLocation.replace("%data%",work.jobs[i].location)
    $(".work-entry:last").append(formattedlocation);

    var formattedDescription=HTMLworkDescription.replace("%data%",work.jobs[i].description)
    $(".work-entry:last").append(formattedDescription);

  }
}


// $(document).click(function(loc) {
//   var x=loc.pageX;
//   var y=loc.pageY;
//
//   logClicks(x,y);
// });

projects.display=function() {
  $("#projects").append(HTMLprojectStart);
  for(var i=0;i<projects.projects.length;i++){
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[i].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates=HTMLprojectDates.replace("%data%",projects.projects[i].dates)
    $(".project-entry:last").append(formattedDates);

    var formattedDescription=HTMLprojectDescription.replace("%data%",projects.projects[i].description)
    $(".project-entry:last").append(formattedDescription);
    for(var j=0;j<projects.projects[i].images.length;j++){
      var formattedimage=HTMLprojectImage.replace("%data%",projects.projects[i].images[j])
      $(".project-entry:last").append(formattedimage);

  }

  }

}


bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);


//$("#main").append(work.jobs[0]["position"]);
//$("#main").append(education.schools[0].name);
