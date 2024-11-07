import { IToDo } from "./interface";
import React from "react";
import { useSetRecoilState } from "recoil";
import { toDoState } from "./atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { currentTarget: {name} } = event;
    console.log(name);
    // setValue();
  };

  return <li>
    <span>{ text }</span>
    { category !== 'TO_DO' && <button name="TO_DO" onClick={onClick}>TO_DO</button>}
    { category !== 'DOING' && <button name="DOING" onClick={onClick}>DOING</button>}
    { category !== 'DONE' && <button name="DONE" onClick={onClick}>DONE</button>}
  </li>;
}

export default ToDo;