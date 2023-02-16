import { createAction, props} from '@ngrx/store';
import { NewTodoInterface } from '../types/newTodo.interface';
import { TodoInterface } from '../types/todo.interface';


export const getTodos = createAction('[Todos] Get Todos');
export const getTodosSuccess  = createAction('[Todos] Get Posts success', props<{todos: TodoInterface[]}>())

export const addTodo = createAction('[Todos] Add todo', props<{todo: NewTodoInterface}>())
export const addTodoSuccess = createAction('[Todos] Add todo Success', props<{todo: any}>())

export const removeTodo = createAction('[Todos] Remove Todo', props<{todoId: string}>())
export const removeTodoSuccess = createAction('[Todos] Remove Todo Success', props<any>())

export const updateTodo = createAction('[Todos] Update todo', props<{todo: any}>())
export const updateTodoSuccess = createAction('[Todos] Update todo Success', props<any>())

