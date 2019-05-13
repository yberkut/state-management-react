import PropTypes from 'prop-types';
import React     from 'react';
import Todo      from './todo';

const TodoList = ({ todos, toggleTodo }: any) => (
    <ul>
        {todos.map((todo: any) => (
            <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
        ))}
    </ul>
);

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
