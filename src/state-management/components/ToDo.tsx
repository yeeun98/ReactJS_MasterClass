import { IToDo } from "./interface";

function ToDo({ text }: IToDo) {
  return <li>
    <span>{ text }</span>
    <button>TO_DO</button>
    <button>DOING</button>
    <button>DONE</button>
  </li>;
}

export default ToDo;