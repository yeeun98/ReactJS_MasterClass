import { useState } from "react";

function TodoList() {
  const [todo, setTodo] = useState('');
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const { currentTarget: {value} } = event;
    setTodo(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo)
  };

  return <div>
    <form onSubmit={onSubmit}>
      <input type="text" value={todo} placeholder="Write a todo" onChange={onChange} />
      <button>Add</button>
    </form>
  </div>
}

export default TodoList;