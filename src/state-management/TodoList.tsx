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

//#region type
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
  extraError?: string;
}
//#endregion

function TodoList() {
  const { register, handleSubmit, formState: {errors}, setError } = useForm<IForm>();
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError('password1', {message: "Password are not the same."}, {shouldFocus: true});
    }

    setError('extraError', {message: 'Server Offline'});
  };
  console.error(errors);

  return  <form onSubmit={handleSubmit(onValid)} style={{display: 'flex', flexDirection: 'column', width: '500px'}}>
    <input {...register('email', {
      required: true,
      pattern: {
        value: /^[A-Za-z0-9._%+-]+@naver.com/g,
        message: 'Only naver.com emails allowed'
      }
    })} placeholder="Email" />
    <span>{errors?.email?.message}</span>

    <input {...register('firstName', {
      required: true,
      validate: (value) => true
    })} placeholder="First Name" />
    <span>{errors?.firstName?.message}</span>

    <input {...register('lastName', {
      required: true,
      validate: (value) => value.includes('nico') ? 'No "nico" allowed' : true
    })} placeholder="Last Name" />
    <span>{errors?.lastName?.message}</span>

    <input {...register('userName', {
      required: true,
      validate: {
        noNico: (value) => value.includes('nico') ? 'No "nico" allowed' : true,
        noNick: (value) => value.includes('nick') ? 'No "nick" allowed' : true,
      }
    })} placeholder="User Name" />
    <span>{errors?.userName?.message}</span>

    <input {...register('password', {
      required: true,
    })} placeholder="PassWord" />
    <span>{errors?.password?.message}</span>

    <input {...register('password1', {
      required: true,
    })} placeholder="PassWord1" />
    <span>{errors?.password1?.message}</span>

    <button>Add</button>

    <div>{errors?.extraError?.message}</div>
  </form>;
}

export default TodoList;