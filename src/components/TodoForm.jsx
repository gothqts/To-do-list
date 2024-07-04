import React, {useEffect} from 'react';
import {useState, useRef} from "react";

const TodoForm = (props) => {

    const handleChange = (e) => {
        setInput(e.target.value)
    };


    const [input, setInput] = useState(props.edit ? props.edit.value : '');


    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')

    };
    return (
        <>
        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                    <>
                        <input
                            type='text'
                            placeholder='Update todo'
                            name='text'
                            value={input}
                            className='todo-input edit'
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className='todo-button edit'>Update todo</button>
                    </>) :
                (<>
                    <input
                        type='text'
                        placeholder='Add todo'
                        name='text'
                        value={input}
                        className='todo-input'
                        onChange={handleChange}
                        ref={inputRef}
                    />
                    <button className='todo-button'>Add todo</button>
                </>)

            }
        </form>
        </>
    );
};

export default TodoForm;