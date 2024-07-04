import React from 'react';
import TodoList from "./components/TodoList.jsx";
import './App.css'

const App = () => {
    return (
        <div className='todo-app'>
            <TodoList/>
        </div>
    );
};

export default App;