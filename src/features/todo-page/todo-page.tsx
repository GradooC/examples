import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { actions, todoSelectors } from './todo-slice';

type Values = {
    todo: string;
};

export const TodoPage: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector(todoSelectors.selectAll);

    return (
        <>
            <Formik
                initialValues={{
                    todo: '',
                }}
                onSubmit={(
                    { todo }: Values,
                    { resetForm }: FormikHelpers<Values>
                ) => {
                    const id = Math.random();
                    dispatch(actions.addTodo({ title: todo, id }));
                    resetForm();
                }}
            >
                <Form>
                    <Field name="todo" placeholder="TO DO" />
                    <button type="submit">ADD</button>
                </Form>
            </Formik>
            <ul>
                {todos.map(({ title }) => (
                    <li>{title}</li>
                ))}
            </ul>
        </>
    );
};
