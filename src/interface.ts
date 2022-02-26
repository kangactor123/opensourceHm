export interface IToDo {
  id?: number;
  title: string;
  done: boolean;
  deadline: string;
}

export interface ItoDoType {
  id: number;
  title: string;
  deadline: string;
  done: boolean;
}

export interface IModal {
  id: number;
  active: boolean;
}
