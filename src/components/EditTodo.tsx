import React, { useState, useRef } from 'react';
import './NewTodo.css';
import { Todo } from '../todo.model';

type NewTodoProps = {
  todo: Todo;
  onEditTodo: (todo: Todo) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const [text, setText] = useState(props.todo.text);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    props.onEditTodo({ id: props.todo.id, text: text });

    setText('');
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' value={text} onChange={onChange} />
      </div>

      <button type='submit'>EDIT TODO</button>
    </form>
  );
};

export default NewTodo;
