import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, toDoState } from "./atoms";
import ToDo from "./ToDo";

function TodoList() {
  // const toDos = useRecoilValue(toDoState);
  const [toDo, doing, done] = useRecoilValue(toDoSelector);
  const selectorOutput = useRecoilValue(toDoSelector);
  // console.log(toDos);
  console.log(selectorOutput);

  return  (
    <div style={{marginTop: '15px'}}>
      <h1> To Dos </h1>
      <hr />
      <CreateToDo />
      <hr/>

      <h2>TO DO</h2>
      <ul>
        { toDo.map(toDo => <ToDo key={toDo.id} {...toDo} />) }
      </ul>
      <hr/>

      <h2>DOING</h2>
      <ul>
        { doing.map(toDo => <ToDo key={toDo.id} {...toDo} />) }
      </ul>
      <hr/>

      <h2>DONE</h2>
      <ul>
        { done.map(toDo => <ToDo key={toDo.id} {...toDo} />) }
      </ul>
      <hr/>
    </div>
  );
}

export default TodoList;