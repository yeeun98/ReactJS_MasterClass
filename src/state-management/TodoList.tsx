import { useState } from "react";
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

function TodoList() {
  const { register, watch, handleSubmit } = useForm();
  const onValid = (data: any) => {
    console.log(data)
  };

  return  <form onSubmit={handleSubmit(onValid)}>
    <input {...register('email')} placeholder="Email" />
    <input {...register('firstName')} placeholder="First Name" required />
    <input {...register('lastName')} placeholder="Last Name" />
    <input {...register('userName')} placeholder="User Name" />
    <input {...register('password', {required: true})} placeholder="PassWord" />
    <input {...register('password1')} placeholder="PassWord1" />
    <button>Add</button>
  </form>;
}

export default TodoList;