import { IProject } from "../domains/project";
import IRepository from "./IRepository";

export default class ProjectRepository implements IRepository<IProject> {
  // eslint-disable-next-line class-methods-use-this
  public getAll(): Promise<IProject[]> {
    return Promise.resolve([
      {
        name: "Cast.SG",
        description:
          "A digital marketplace where users can purchase digital products and manage their subscriptions on the website. I was mainly working on the purchase and subscription system.\r\n\r\n" +
          "using Node.js, Nest.js, Postgres, Typescript, React.js",
        imageUrl: "cast.png",
        date: "Feb 2022",
      },
      {
        name: "Avarik Saga",
        description:
          "Avarik Saga is a JRPG game powered by web3. I was working on token vesting page, leaderboard, faction pages, etc. \r\n\r\n" +
          "using React.js, Next.js, web3, Ethereum, ethers.js",
        imageUrl: "avarik.png",
        date: "Feb 2022",
      },
      {
        name: "Pollution Monitoring System",
        description:
          "This system help monitoring and mapping city's current air pollution. My role is to create a system to retrieve air pollution data from microcontroller and pointing its location to map. \r\n\r\n" +
          "using Laravel, Python, Leaflet.js",
        imageUrl: "wartechs.jpg",
        date: "March 2015",
      },
      {
        name: "Anava #9 ",
        shortDesc: "Online Tryout Competition Site",
        description:
          "Developing a homepage and online tryout competition held by Himpunan Mahasiswa Statistik, Gadjah Mada University. I was working on the project specification, design, user module, content module, project deployment and live monitoring. \r\n\r\n" +
          "using Laravel, HTML, CSS, MySQL, Bootstrap, jQuery",
        imageUrl: "anava-9.jpg",
        date: "November 2014",
      },
      {
        name: "Voluntr.me",
        shortDesc: "Voluntr.me",
        description:
          "This website is all about volunteer service. It is similar like Kickstarter and Indiegogo. However, Voluntrme do crowdsourcing people. \r\n\r\n" +
          "using PHP, Drupal, HTML, CSS, jQuery",
        imageUrl: "voluntrme.jpg",
        date: "January 2015",
      },
      {
        name: "CoAnalis",
        shortDesc: "Freelancer Website for Data Analyst",
        description:
          "Freelancer website for data analyst. Here, people can get their ideal solution by choosing the right analyst. My role is to develop a fully working website from the converting design from psd until the deployment \r\n\r\n" +
          "using Laravel, HTML, CSS, MySQL, Bootstrap, jQuery",
        imageUrl: "coanalis.jpg",
        date: "November 2015",
      },
      {
        name: "Directory SMUPreneurs",
        shortDesc: "Alumnus Directory",
        description:
          "Developing and bugfixing a networking website for Singapore Management University using Laravel \r\n\r\n" +
          "using Laravel, PHP, jQuery, HTML, CSS",
        imageUrl: "SMUpreneurs.png",
        date: "August 2016",
      },
      {
        name: "Iwak.me Sales Management",
        shortDesc: "Sales Management App",
        description:
          "This website is a system admin that helps user track delivery of fish from farms to restaurants, manage restaurant, courier, and fish farm that involved. There is 4 person in charge of this project, 2 front-end developer, 1 back-end developer and 1 designer. My responsibility includes: converting PDF to working react-component, move server state to client state, sync both states using WebSocket. \r\n\r\n" +
          "using React, Redux, Google Maps API, and Socket.io",
        imageUrl: "iwak.png",
        date: "Mei 2018",
      },
      {
        name: "Sentiment Analysis Dashboard",
        shortDesc: "Sentiment Analysis Dashboard",
        description:
          "This dashboard helps the process of sentiment analysis by extracting and studying the affective states of information on Twitter for the purpose of research studies.The project is a continuation of previous research. When I enter the team, the application is pretty much done but it has to be improved from the previous research by changing the methodology. My job is to implement learning algorithms and redesign the database based on specifications, give a team from a developer perspective, and visualize the process. \r\n\r\n" +
          "using ScikitLearn, Flask, MongoDB, Angular.js, jQuery, HTML, CSS, Bootstrap",
        imageUrl: "AnalisisSentimen.png",
        date: "Juli 2018",
      },
      {
        name: "Wideboard",
        description:
          "Wideboard  is  a  chat messenger  with  built-in  productivity  tools  that help  the  user to collaborate with co-worker easier. As Front-End Lead, my job is to plan and implement the project architecture based on spec, converting PDF design into React Component and establish a workflow that fit the team.\r\n\r\n" +
          "using Typescript, Javascript, ReactJS, Redux, rxjs",
        imageUrl: "wideboard.png",
        date: "February 2018",
      },
    ]);
  }
}
