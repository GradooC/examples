import { combineReducers } from '@reduxjs/toolkit';
import { reducer as todosReducer } from './todo-page';

export const rootReducer = combineReducers({
    todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
