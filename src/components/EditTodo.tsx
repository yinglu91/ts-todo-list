import React, { useState, useEffect } from 'react';
import './NewTodo.css';
import { Todo } from '../todo.model';

type NewTodoProps = {
  todo: Todo;
  onEditTodo: (todo: Todo) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const [todo, setTodo] = useState<Todo>(props.todo);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    props.onEditTodo(todo);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='text'>Todo Text</label>
        <input
          type='text'
          id='text'
          name='text'
          value={todo.text}
          onChange={onChange}
        />
      </div>

      <button type='submit'>EDIT TODO</button>
    </form>
  );
};

export default NewTodo;
