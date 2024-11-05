import { useForm } from "react-hook-form";
import { atom, useRecoilState } from "recoil";

/**
function TodoList() {
  const [isTodoError, setIsTodoError] = useState(false);
  const [todo, setTodo] = useState('');
  const [todo1, setTodo1] = useState('');
  const [todo2, setTodo2] = useState('');
  const [todo3, setTodo3] = useState('');
  const [todo4, setTodo4] = useState('');

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget: {value} } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // validation example
    if(todo.length < 10) setIsTodoError(true);
  };

  return <div>
    <form onSubmit={onSubmit}>
      <input type="text" value={todo} placeholder="Write a todo" onChange={onChange} />
      <input type="text" value={todo1} placeholder="Write a todo" onChange={onChange} />
      <input type="text" value={todo2} placeholder="Write a todo" onChange={onChange} />
      <input type="text" value={todo3} placeholder="Write a todo" onChange={onChange} />
      <input type="text" value={todo4} placeholder="Write a todo" onChange={onChange} />
      <button>Add</button>

      {isTodoError ? 'Error' : ''}
    </form>
  </div>
}
 */

//#region type
interface FormData {
  [key: string]: string;
}
interface IForm {
  toDo: string;
}
interface IToDo {
  id: number;
  text: string;
  category: 'TO_DO' | 'DOING' | 'DONE';
}
//#endregion

const toDoState = atom<IToDo[]>({
  key: 'toDo',
  default: []
});

function TodoList() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({toDo}: IForm) => {
    setToDos(oldToDos => [{id: Date.now(), text: toDo, category: 'DOING'},...oldToDos]);
    setValue('toDo', '');
  };

  return  <div style={{marginTop: '15px'}}>
    <h1> To Dos </h1>
    <hr />
    <form onSubmit={handleSubmit(handleValid)}>
      <input 
        {...register('toDo', {
          required: 'Please write a To Do'
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
    <hr/>

    <ul>
      { toDos.map(v => <li key={`toDo_${v.id}`}>{v.text}</li>) }
    </ul>
  </div>;
}

export default TodoList;