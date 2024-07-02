import React, { useState } from 'react';

function App() {
  const [value, setValue] = useState<string>("");

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    const value = event.target.value;
    setValue(value);
  }; 

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder='username' onChange={onChange} />
        <button>Login</button>
      </form>
    </div>
  );
}

export default App;