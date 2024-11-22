import IRepository from "./IRepository";
import { ISkill } from "../domains/skill";

export default class SkillRepository implements IRepository<ISkill> {
  // eslint-disable-next-line class-methods-use-this
  public getAll(): Promise<ISkill[]> {
    return Promise.resolve([
      {
        name: "Javascript",
        experience: 8,
        logoUrl: "js.webp",
        tests: [
          {
            name: "Pluralsight Skill IQ test",
            url: "https://app.pluralsight.com/profile/ramjak",
          },
        ],
      },
      {
        name: "Typescript",
        experience: 5,
        logoUrl: "ts.webp",
        tests: [
          {
            name: "Typescript Design Pattern course",
            url: "https://www.udemy.com/certificate/UC-AN74LPM5",
          },
        ],
      },
      {
        name: "React.js",
        experience: 7,
        logoUrl: "react.webp",
        tests: [
          {
            name: "Pluralsight Skill IQ test",
            url: "https://app.pluralsight.com/profile/ramjak",
          },
        ],
      },
      {
        name: "HTML5",
        experience: 8,
        logoUrl: "html5.webp",
        tests: [
          {
            name: "Pluralsight Skill IQ test",
            url: "https://app.pluralsight.com/profile/ramjak",
          },
        ],
      },
      {
        name: "CSS3",
        experience: 8,
        logoUrl: "css3.webp",
        tests: [
          {
            name: "Pluralsight Skill IQ test",
            url: "https://app.pluralsight.com/profile/ramjak",
          },
        ],
      },
      {
        name: "Git",
        experience: 8,
        logoUrl: "git.webp",
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
