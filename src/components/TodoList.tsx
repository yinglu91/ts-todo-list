import React from 'react';
import { link } from 'fs';
import './TodoList.css';
import { Todo } from '../todo.model';

interface TodoListProps {
  items: Todo[];
  setCurrent: (todo: Todo) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <span>
            {' '}
            {todo.id} {todo.text}
          </span>
          <div>
            <button onClick={() => props.setCurrent(todo)}>EDIT</button>{' '}
            <button onClick={() => props.onDeleteTodo(todo.id)}>DELETE</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
