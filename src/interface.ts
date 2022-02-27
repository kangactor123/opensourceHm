export interface IToDo {
  id?: number;
  title: string;
  done: boolean;
  deadline: string;
}

export interface IModal {
  id: number;
  active: boolean;
}

export interface IPage {
  pageValue: number;
  nowPage: number;
}
