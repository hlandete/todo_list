export interface TodoI {
  id: number; // Identificador único de la tarea
  text: string;
  description?: string; // El texto o contenido de la tarea
  completed: boolean; // Estado de la tarea (completada o no)
}
