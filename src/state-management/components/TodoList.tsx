import { useRecoilState, useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { categoryState, toDoSelector, toDoState } from "./atoms";
import ToDo from "./ToDo";

function TodoList() {
  const list = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {currentTarget: {value}} = event;
    setCategory(value);
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