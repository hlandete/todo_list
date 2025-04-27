import React, { type FC } from 'react';

interface Props {
  text: string;
  completed: boolean;
  description?: string;
  onChange: () => void;
}

const Todo: FC<Props> = ({ text, completed, description = '', onChange }) => (
  <li
    className={`flex gap-5 p-2 border-b ${
      completed ? 'bg-green-200' : 'bg-red-200'
    }`}
  >
    <input
      className="cursor-pointer"
      type="checkbox"
      tabIndex={0}
      role="button"
      checked={completed}
      onChange={() => {
        onChange();
      }}
    />
    <span className="flex-1 justify-between">
      {text} - {description}
    </span>
  </li>
);

export default Todo;
