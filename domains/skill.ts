export interface ISkill {
  name: string;
  logoUrl: string;
  experience: number;
  tests: ITest[];
}

export interface ITest {
  name: string;
  score?: string;
  url: string;
}
