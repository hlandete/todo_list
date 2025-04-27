import React, { FC } from 'react';
import { TodoI } from '../models/TodoI';
import Todo from './Todo';

interface TodoListProps {
  name: string;
  onDelete: () => void;
}

const TodoList: FC<TodoListProps> = ({ name, onDelete }) => {
  const [newTodoName, setNewTodoName] = React.useState<string>('');
  const [newTodoDescription, setNewTodoDescription] =
    React.useState<string>('');
  const [todos, setTodos] = React.useState<TodoI[]>([]);

  const handleAddTodo = () => {
    if (newTodoName.trim() === '') {
      alert('Please enter a task');
      return;
    }
    const newTask: TodoI = {
      id: Date.now(),
      text: newTodoName,
      completed: false,
      description: newTodoDescription,
    };
    setTodos([...todos, newTask]);
    setNewTodoName('');
    setNewTodoDescription('');
  };

  const handleChangeTodo = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <div className="flex flex-col gap-5 p-4 border rounded">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{name}</h1>
        <span
          className="cursor-pointer"
          role="button"
          tabIndex={0}
          onClick={() => onDelete()}
        >
          Borrar
        </span>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddTodo();

          const form = e.target as HTMLFormElement;
          (form.elements.namedItem('name') as HTMLInputElement).focus();
        }}
        className="flex flex-col gap-2"
      >
        <input
          type="text"
          name="name"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Add a new task"
        />
        <input
          type="text"
          name="description"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
          className="border p-2 rounded w-full"
          placeholder="Add a new task description"
        />
        <button
          type="submit"
          className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
        >
          Add Task
        </button>
      </form>
      <ul className="mt-4">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            description={todo.description}
            completed={todo.completed}
            onChange={() => handleChangeTodo(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
