export type categories = 'TO_DO' | 'DOING' | 'DONE';

export enum Categories {
  'TO_DO',
  'DOING',
  'DONE'
}

export interface IForm {
  toDo: string;
}
export interface IToDo {
  id: number;
  text: string;
  category: categories;
}