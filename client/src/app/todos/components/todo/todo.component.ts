import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../types/appState.interface';
import * as TodosActions from '../../store/actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todo!: any;
  isEditingMode: boolean = false;
  editingText: string = '';

  constructor(private store: Store<AppStateInterface>) {}

  ngOnInit(): void {
    this.editingText = this.todo.text;
  }

  changeTodoStatus(): void {
    const updatedTodo = { ...this.todo }
    updatedTodo.isCompleted = !updatedTodo.isCompleted
    this.store.dispatch(TodosActions.updateTodo({todo: updatedTodo}))
  }

  changeTodoText(event: Event) {
    const target = event.target as HTMLInputElement;
    this.editingText = target.value;
  }

  saveEditedTodo() {
    const updatedTodo = { ...this.todo }
    updatedTodo.text = this.editingText;
    this.store.dispatch(TodosActions.updateTodo({todo: updatedTodo}))
  }

  removeTodo(id: string) {
    this.store.dispatch(TodosActions.removeTodo({todoId: id}))
  }
}
