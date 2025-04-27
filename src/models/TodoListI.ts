import { Todo } from './TodoI';

export interface TodoListI {
  id: number; // Identificador único de la lista
  name: string; // Nombre de la lista
  todos: Todo[]; // Lista de tareas asociadas a esta lista
}
