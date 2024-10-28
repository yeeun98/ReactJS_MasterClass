import { useForm } from "react-hook-form";

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
interface FormData {
  [key: string]: string;
}
interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
  password1: string;
}

  
function TodoList() {
  const { register, handleSubmit, formState: {errors} } = useForm<IForm>();
  const onValid = (data: IForm) => {
    console.log(data)
  };
  console.error(errors)

  return  <form onSubmit={handleSubmit(onValid)} style={{display: 'flex', flexDirection: 'column', width: '200px'}}>
    <input {...register('email', {
      required: true,
      pattern: {
        value: /^[A-Za-z0-9._%+-]+@naver.com/g,
        message: 'Only naver.com emails allowed'
      }
    })} placeholder="Email" />
    <span>{errors?.email?.message}</span>

    <input {...register('firstName', {
      required: true
    })} placeholder="First Name" />
    <input {...register('lastName', {
      required: true
    })} placeholder="Last Name" />
    <input {...register('userName', {
      required: true,
    })} placeholder="User Name" />
    <input {...register('password', {
      required: true,
    })} placeholder="PassWord" />
    <input {...register('password1', {
      required: true,
    })} placeholder="PassWord1" />
    
    <button>Add</button>
  </form>;
}

export default TodoList;