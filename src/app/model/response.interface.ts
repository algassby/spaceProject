import { Launch } from "./launch";

export interface IResponse<T> {
    results: T;
  }

  export interface ILaunchs {
    launchs: Launch[];
  }