import React, {useState} from 'react';

function TodoList() {
  const [todo, setTodo] = useState('');
  const onChange = (e:React.FormEvent<HTMLInputElement>) => {
    const {value} = e.currentTarget;
    setTodo(value);
  }
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(todo);
  }
  return (
      <div>
        <form onSubmit={onSubmit}>
          <input onChange={onChange} value={todo} type="text" placeholder='Write a to do'/>
          <button>Add</button>
        </form>
      </div>
  );
}

export default TodoList;