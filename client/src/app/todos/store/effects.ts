import { Injectable } from "@angular/core";
import { createEffect } from "@ngrx/effects";
import { Actions, ofType } from "@ngrx/effects";
import * as TodosActions from './actions';
import { TodosService } from '../services/todos.service';
import { catchError, map, mergeMap, of } from "rxjs";

 
 @Injectable()
 export class TodosEffects {

  getTodos$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TodosActions.getTodos),
      mergeMap(() => {
        return this.todosService.getTodosFromService().pipe(
          map((todos) => TodosActions.getTodosSuccess({ todos: todos })),
          catchError((error) => 
            of(error)
          )
        )
      })
    )
  )

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.addTodo),
      mergeMap(action =>
        this.todosService.addTodo(action.todo).pipe(
          map(response => {
            return TodosActions.addTodoSuccess({todo: response})
          }),

          catchError((error: any) => of(error)))
      )
    )
  );

  deleteTodo$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TodosActions.removeTodo),
      mergeMap(action => 
          this.todosService.deleteTodo(action.todoId).pipe(
            map(response => TodosActions.removeTodoSuccess(response))
          )
        )
    )
  )

  updateTodo$ = createEffect(() => 
    this.actions$.pipe(
      ofType(TodosActions.updateTodo),
      mergeMap(action => 
        this.todosService.updateTodo(action.todo._id, action.todo).pipe(
          map(response => TodosActions.updateTodoSuccess(response))
        )
        )
    )
  )

  constructor(private actions$: Actions, private todosService: TodosService) {}
}
