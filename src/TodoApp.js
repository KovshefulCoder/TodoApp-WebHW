import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

function TodoApp() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Finish Web homework instead of May holidays', completed: false },
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { id: Date.now(), text, completed: false }];
        setTodos(newTodos);
    };

    const toggleTodo = id => {
        const newTodos = todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        setTodos(newTodos);
    };

    const deleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    };

    return (
        <div>
            <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
            <TodoForm addTodo={addTodo} />
        </div>
    );
}

export default TodoApp;
