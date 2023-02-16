import { createReducer, on } from '@ngrx/store';
import * as TodosActions from './actions';
import { TodosStateInterface } from '../types/todosState.interface';
import { TodoInterface } from '../types/todo.interface';
import { NewTodoInterface } from '../types/newTodo.interface';

export const initialTodosState: TodosStateInterface = {
  todos: [],
  newTodo: {
    text: '',
    isCompleted: false
  },
  deletedTodoId: '',
  editedTodo: {
    id: '',
    text: '',
    isCompleted: false
  }
}

export const todosReducer = createReducer(
  initialTodosState,
  on(TodosActions.getTodos, (state) => ({...state})),
  on(TodosActions.getTodosSuccess, (state, action) => ({...state, todos: action.todos})),

  on(TodosActions.addTodo, (state, action) => {
    return {...state, newTodo: action.todo}
  }),
  on(TodosActions.addTodoSuccess, (state, action) => {
    const emptyTodo: NewTodoInterface = {
      text: '',
      isCompleted: false
    }
    return {...state, todos: [...state.todos, action.todo], newTodo: emptyTodo}
  }),

  on(TodosActions.removeTodo, (state, action) => {
    return {...state, deletedTodoId: action.todoId}
  }),
  on(TodosActions.removeTodoSuccess, (state, action) => {
    let todos = [...state.todos];
    if(action.msg._id) {
      todos = todos.filter(todo => todo.id !== action.msg._id)
    }
    return {...state, todos: todos, deletedTodoId: ''}
  }),

  on(TodosActions.updateTodo, (state, action) => {
    return {...state, editedTodo: action.todo}
  }),
  on(TodosActions.updateTodoSuccess, (state, action) => {
    let todos = [...state.todos]
    let currentTask = {...state.editedTodo}

    todos = todos.map(todo => {
      if(todo.id === currentTask.id) {
        return currentTask
      }
      return todo
    })

    const emptyTodo: TodoInterface = {
      id: '',
      text: '',
      isCompleted: false
    }

    return {...state, todos: todos, editedTodo: emptyTodo}
  })
)
