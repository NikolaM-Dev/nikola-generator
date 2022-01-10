export interface Dependecy {
  [index: number]: string;
}

export interface Technology {
  [index: string]: Dependecy[];
}
