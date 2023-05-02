import React from 'react';

function TodoList({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo.id} className="todo-item">
                    <label>
                        <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                        <span>{todo.text}</span>
                    </label>
                    <button onClick={() => deleteTodo(todo.id)}>X</button>
                </li>
            ))}
        </ul>
    );
}

export default TodoList;
