import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { todosReducer } from './store/reducers';
import { TodosComponent } from './components/todos/todos.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo/todo.component';
import { EffectsModule } from '@ngrx/effects';
import { TodosEffects } from './store/effects';

@NgModule({
  declarations: [
    TodosComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('todosStore', todosReducer),
    FormsModule,
    EffectsModule.forFeature([TodosEffects])
  ],
  exports: [
    TodosComponent
  ]
})
export class TodosModule { }
