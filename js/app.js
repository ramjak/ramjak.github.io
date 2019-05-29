var portofolio = angular.module('portofolio', []);

portofolio.controller('ProjectListCtrl', function ($scope) {
  $scope.projects = [
    {
      'name': 'Smart Pollution Monitoring System',
      'description': "This system help monitoring and mapping city's current air pollution. My role is to create a system to retrieve air pollution data from microcontroller and pointing its location to map. \r\n\r\n" +
      "using Laravel, Python, Leaflet.js",
      "image": "images/wartechs.jpg",
      "date": "March 2015"
    },
    // {
    //   'name': 'Pen Art',
    //   'description': 'A web application to help newbie writers create fiction novel with writer community. Writers help each other by connecting plot ideas into novel. Currently this work is unfinished due to many reason. Hopefully will continue after gaining more participant.',
    //   "image": "images/pen-art.jpg",
    //   "date": "August 2014"
    // },
    {
      'name': "Anava #9 ",
      'description': "Developing a homepage and online tryout competition held by Himpunan Mahasiswa Statistik, Gadjah Mada University. I was working on the project specification, design, user module, content module, project deployment and live monitoring. \r\n\r\n" +
      "using Laravel, HTML, CSS, MySQL, Bootstrap, jQuery",
      "image": "images/anava-9.jpg",
      "date": "November 2014"
    },
    {
      'name': "Voluntr.me",
      'description': "This website is all about volunteer service. It is similar like Kickstarter and Indiegogo. However, Voluntrme do crowdsourcing people. \r\n\r\n" +
      "using PHP, Drupal, HTML, CSS, jQuery",
      "image": "images/voluntrme.jpg",
      "date": "January 2015"
    },
    // {
    //   'name': "Reaktivis",
    //   'description': "An aspiration-collector website which gathering people thought about current goverment activities and create a referendum based on most controversial issues. ",
    //   "image": "http://placehold.it/1280x3000",
    //   "date": "February 2015"
    // },
    // {
    //   'name': "Green Reaktivis",
    //   'description': "An extension of Reaktivis, which were created at a hackathon event, HackGov 2015. This extension is planned to be a subdomain to Reaktivis main site. It's named \"Green\" because it's main concern is about environmental and public works. It's using people power to determine the condition of environmental or public works.",
    //   "image": "images/green-reaktivis.jpg",
    //   "date": "November 2015"
    // },
    {
      'name': "CoAnalis",
      'description': "Freelancer website for data analyst. Here, people can get their ideal solution by choosing the right analyst. My role is to develop a fully working website from the converting design from psd until the deployment \r\n\r\n" +
      "using Laravel, HTML, CSS, MySQL, Bootstrap, jQuery",
      'image': "images/coanalis.jpg",
      'date': "November 2015"
    },
    {
      'name': "Directory SMUPreneurs",
      'description': "Developing and bugfixing a networking website for Singapore Management University using Laravel \r\n\r\n" +
      "using Laravel, PHP, jQuery, HTML, CSS",
      'image': "images/SMUpreneurs.png",
      'date': "August 2016"
    },
    {
      'name': "Iwak.me Sales Management",
      'description': "This website is a system admin that helps user track delivery of fish from farms to restaurants, manage restaurant, courier, and fish farm that involved. There is 4 person in charge of this project, 2 front-end developer, 1 back-end developer and 1 designer. My responsibility includes: converting PDF to working react-component, move server state to client state, sync both states using WebSocket. \r\n\r\n" +
      "using React, Redux, Google Maps API, and Socket.io",
      'image': "images/iwak.png",
      'date': "Mei 2018"
    },
    {
      'name': "Sentiment Analysis Dashboard",
      'description': "This dashboard helps the process of sentiment analysis by extracting and studying the affective states of information on Twitter for the purpose of research studies.The project is a continuation of previous research. When I enter the team, the application is pretty much done but it has to be improved from the previous research by changing the methodology. My job is to implement learning algorithms and redesign the database based on specifications, give a team from a developer perspective, and visualize the process. \r\n\r\n"+
      "using ScikitLearn, Flask, MongoDB, Angular.js, jQuery, HTML, CSS, Bootstrap",
      'image': "images/AnalisisSentimen.png",
      'date': "Juli 2018"
    },
    {
      'name': "Wideboard",
      'description': "Wideboard  is  a  chat messenger  with  built-in  productivity  tools  that help  the  user to collaborate with co-worker easier. As Front-End Lead, my job is to plan and implement the project architecture based on spec, converting PDF design into React Component and establish a workflow that fit the team.\r\n\r\n" +
      "using Typescript, Javascript, ReactJS, Redux, rxjs",
      image: "images/wideboard.png",
      date: "February 2018",
    }
  ];
  $scope.spotlight = $scope.projects[3];
  $scope.setSpotlight = function(project) {
    $scope.spotlight = project;
  }
});
