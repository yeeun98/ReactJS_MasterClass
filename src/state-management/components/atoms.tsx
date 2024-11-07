import { atom, selector } from "recoil";
import { IToDo } from "./interface";

export const categoryState = atom({
  key: 'category',
  default: 'TO_DO'
})

export const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: []
});

export const toDoSelector = selector({
  key:'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState);

    return toDos.filter((toDo) => toDo.category === get(categoryState));
  },
});