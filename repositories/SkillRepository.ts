import IRepository from "./IRepository";
import { ISkill } from "../domains/skill";

export default class SkillRepository implements IRepository<ISkill> {
  // eslint-disable-next-line class-methods-use-this
  public getAll(): Promise<ISkill[]> {
    return Promise.resolve([
      {
        name: "Javascript",
        experience: 5,
        logoUrl: "js.png",
        tests: [
          {
            name: "Pluralsight Skill IQ test",
            url: "https://app.pluralsight.com/profile/ramjak",
          },
        ],
      },
      {
        name: "Typescript",
        experience: 1.5,
        logoUrl: "ts.png",
        tests: [
          {
            name: "Typescript Design Pattern course",
            url: "https://www.udemy.com/certificate/UC-AN74LPM5",
          },
        ],
      },
      {
        name: "React.js",
        experience: 5,
        logoUrl: "react.png",
        tests: [
          {
            name: "Pluralsight Skill IQ test",
            url: "https://app.pluralsight.com/profile/ramjak",
          },
        ],
      },
      {
        name: "HTML5",
        experience: 5,
        logoUrl: "html5.png",
        tests: [
          {
            name: "Pluralsight Skill IQ test",
            url: "https://app.pluralsight.com/profile/ramjak",
          },
        ],
      },
      {
        name: "CSS3",
        experience: 5,
        logoUrl: "css3.png",
        tests: [
          {
            name: "Pluralsight Skill IQ test",
            url: "https://app.pluralsight.com/profile/ramjak",
          },
        ],
      },
      {
        name: "Git",
        experience: 5,
        logoUrl: "git.png",
        tests: [
          {
            name: "Pluralsight Skill IQ test",
            url: "https://app.pluralsight.com/profile/ramjak",
          },
        ],
      },
    ]);
  }
}
