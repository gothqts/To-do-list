import React from 'react';
import {useState} from 'react';
import TodoForm from "./TodoForm.jsx";
import Todo from "./Todo.jsx"

const TodoList = () => {
    const [todos,setTodos]=useState([])

    const addTodo=(todo)=>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos=[...todos, todo]
        setTodos(newTodos);
        console.log(...todos)
    }

    const updateTodo = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev=> prev.map(item => (item.id === todoId ? newValue: item )));
    }
    const removeTodo=(id)=>{
        const sortedArr = [...todos].filter(todo=>todo.id!==id)
        setTodos(sortedArr)
    }



    const completeTodo = (id)=>{
        let updatedTodos = todos.map(todo=>{
            if (todo.id === id ){
                todo.isComplete = !todo.isComplete;
            }
            return todo
        })
        setTodos(updatedTodos)
    }
    return (
        <div>
            <h1>Whats the plan for today?</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo
            todos={todos}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}/>
        </div>
    );
};

export default TodoList;