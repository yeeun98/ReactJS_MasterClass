import { useRecoilValue, useSetRecoilState } from "recoil";
import CreateToDo from "./CreateToDo";
import { categoryState, toDoSelector } from "./atoms";
import ToDo from "./ToDo";
import { categories } from "./interface";

function TodoList() {
  const list = useRecoilValue(toDoSelector);
  const setCategory = useSetRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {currentTarget: {value}} = event;
    setCategory(value as categories);
  }

  return  (
    <div style={{marginTop: '15px'}}>
      <h1> To Dos </h1>
      <hr />
      <select onChange={onInput}>
        <option value="TO_DO">To Do</option>
        <option value="DOING">Doing</option>
        <option value="DONE">Done</option>
      </select>
      <CreateToDo />

      <ul>
        {
          list.map(v => <ToDo key={v.id} {...v} />)
        }
      </ul>
      <hr/>
    </div>
  );
}

export default TodoList;