import { useState } from 'react';

import { TodoListI } from './models/TodoListI';
import TodoList from './components/TodoList';

function App() {
  const [newListName, setNewListName] = useState<string>('');
  const [lists, setlists] = useState<TodoListI[]>([]);

  const handleAddList = () => {
    if (newListName.trim() === '') {
      alert('Please enter a task');
      return;
    }
    const newList: TodoListI = {
      id: Date.now(),
      name: newListName,
      todos: [],
    };
    setlists([...lists, newList]);
    setNewListName('');
  };

  const handleDeleteList = (id: number) => {
    const updatedLists = lists.filter((list) => list.id !== id);
    setlists(updatedLists);
  };

  return (
    <>
      <div className="container flex flex-col gap-10 mx-auto p-4">
        <div className="flex flex-col max-w-[20%] p-4 border rounded">
          <input
            type="text"
            value={newListName}
            onChange={(e) => setNewListName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAddList();
              }
            }}
            className="border p-2 rounded w-full"
            placeholder="Add a new list"
          />
          <button
            onClick={handleAddList}
            className="mt-2 bg-blue-500 text-white p-2 rounded w-full"
          >
            Create List
          </button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {lists.map((list) => (
            <TodoList
              name={list.name}
              onDelete={() => handleDeleteList(list.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
