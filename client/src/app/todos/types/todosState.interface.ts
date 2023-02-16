import { NewTodoInterface } from './newTodo.interface';
import { TodoInterface } from './todo.interface';

export interface TodosStateInterface {
  todos: TodoInterface[],
  newTodo: NewTodoInterface,
  deletedTodoId: string,
  editedTodo: TodoInterface
}
