import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { RootState } from '../root-reducer';

type Todo = {
    id: number;
    title: string;
};

const todosAdapter = createEntityAdapter<Todo>();

const todos = createSlice({
    name: 'todos',
    initialState: todosAdapter.getInitialState(),
    reducers: {
        addTodo: todosAdapter.addOne,
        removeTodo: todosAdapter.removeOne,
        clearTodos: todosAdapter.removeAll,
    },
});

export const todoSelectors = todosAdapter.getSelectors<RootState>(
    (state) => state.todos
);

export const { actions, reducer } = todos;
