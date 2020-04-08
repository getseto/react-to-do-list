import React, { useState } from 'react';
import './toDoList.css';

function TodoList () {
    const [task, setTask] = React.useState('');
    const [todoList, setTodoList] = React.useState([]);

    const handleChange = (e) => {
        setTask(e.target.value)
    }
    const handleAddTask = (e) => {
        e.preventDefault();
        
        if (task.trim() !== '') {
            setTodoList(todoList.concat(task));
            setTask('');
        }
    }
    const taskList = todoList.map ((item, index) => {
        return(
        <li key = {index}>{item}</li>
        )
    })
    return(
        <div className = 'Todo'>
            <form onSubmit={handleAddTask}>
                <input type = 'text' placeholder = 'Add a task' value = {task} onChange={handleChange} />
                <buttton>Add</buttton>
            </form>
            <ul>{taskList}</ul>
        </div>
    );
}

export default TodoList;