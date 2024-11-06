export interface IForm {
  toDo: string;
}
export interface IToDo {
  id: number;
  text: string;
  category: 'TO_DO' | 'DOING' | 'DONE';
}