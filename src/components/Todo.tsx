import { type FC } from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

interface Props {
  text: string;
  completed: boolean;
  description?: string;
  onChange: () => void;
  onDelete: () => void;
}

const Todo: FC<Props> = ({
  text,
  completed,
  description = '',
  onChange,
  onDelete,
}) => (
  <li
    className={`flex gap-5 p-2 border-b justify-between ${
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
      {text} {description && `- ${description}`}
    </span>
    <span
      className="cursor-pointer"
      role="button"
      tabIndex={0}
      onClick={() => onDelete()}
    >
      <DeleteOutlineOutlinedIcon />
    </span>
  </li>
);

export default Todo;
