export interface dependecy {
  [index: number]: string;
}

export interface technology {
  [index: string]: dependecy[];
}
