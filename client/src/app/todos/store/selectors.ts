import { AppStateInterface } from "src/app/types/appState.interface";
import { createSelector } from '@ngrx/store';

export const selectFeature = (state: AppStateInterface) => state.todosStore;

export const todosSelector = createSelector(selectFeature, (state) => state.todos);
