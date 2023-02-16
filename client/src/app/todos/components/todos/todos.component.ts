import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoInterface } from '../../types/todo.interface';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from '../../../types/appState.interface';
import { todosSelector } from '../../store/selectors';
import * as TodosActions from '../../store/actions';
import { NewTodoInterface } from '../../types/newTodo.interface';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos$: Observable<TodoInterface[]>;
  todoText: string = '';

  constructor(private store: Store<AppStateInterface>) {
    this.todos$ = this.store.pipe(select(todosSelector));
  }

  ngOnInit(): void {
    this.store.dispatch(TodosActions.getTodos())
  }

  changeText(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.todoText = target.value;
  }

  addTodo(): void {
    const newTodo: NewTodoInterface = {
      text: this.todoText,
      isCompleted: false
    };
    this.store.dispatch(TodosActions.addTodo({todo: newTodo}));
    this.todoText = '';
  }
}
