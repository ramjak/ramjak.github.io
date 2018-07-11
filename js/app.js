var portofolio = angular.module('portofolio', []);

portofolio.controller('ProjectListCtrl', function ($scope) {
  $scope.projects = [
    {
      'name': 'Smart Pollution Monitoring System',
      'description': "This system help monitoring and mapping city's current air pollution. My role is to create a system to retrieve air pollution data from microcontroller and pointing its location to map.",
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
      'description': "Developing a homepage and online test system for a competition held by Himpunan Mahasiswa Statistik, Gadjah Mada University. I was working for registration, content and design.",
      "image": "images/anava-9.jpg",
      "date": "November 2014"
    },
    {
      'name': "Voluntr.me ",
      'description': "This website is all about volunteer service. It is similar like Kickstarter and Indiegogo. However, Voluntrme do crowdsourcing people.",
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
      'name': "Coanalis",
      'description': "Freelancer website for data analyst. Here, people can get their ideal solution by choosing the right analyst. My role is to develop a fully working website from the converting design from psd until the deployment",
      'image': "images/coanalis.jpg",
      'date': "November 2015"
    },
    {
      'name': "Directory SMUPreneurs",
      'description': "Developing and bugfixing a networking website for Singapore Management University using Laravel",
      'image': "images/SMUpreneurs.png",
      'date': "August 2016"
    }
  ];
  $scope.spotlight = $scope.projects[2];
  $scope.setSpotlight = function(project) {
    $scope.spotlight = project;
  }
});
