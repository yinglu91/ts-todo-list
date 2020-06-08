import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import EditTodo from './components/EditTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [current, setCurrent] = useState<Todo | null>(null);

  const addTodoHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text },
    ]);
  };

  const editTodoHandler = (todoEdited: Todo): void => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) =>
        todo.id === todoEdited.id ? todoEdited : todo
      );
    });

    setCurrent(null);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className='App'>
      {!current && <NewTodo onAddTodo={addTodoHandler} />}
      {current && <EditTodo onEditTodo={editTodoHandler} todo={current} />}

      <TodoList
        items={todos}
        setCurrent={setCurrent}
        onDeleteTodo={deleteTodoHandler}
      />
    </div>
  );
};

export default App;
