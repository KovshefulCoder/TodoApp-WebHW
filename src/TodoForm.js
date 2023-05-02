import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={event => setValue(event.target.value)} placeholder="Add a new task..." />
            <button type="submit">+</button>
        </form>
    );
}

export default TodoForm;
