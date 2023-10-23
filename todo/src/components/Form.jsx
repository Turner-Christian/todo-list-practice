import React, { useState } from "react";

const Form = (props) => {
    const [ todo, setTodo ] = useState('');
    const { updateTodoList } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        
        updateTodoList({
            content: todo,
            isComplete: false,
            id: Math.floor(Math.random() * 100000000).toString(),
        });
        setTodo('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="text"
                    placeholder="What do you need to do?"
                    onChange={(e) => { setTodo(e.target.value);}}
                    value={todo}
                    required
                    className="input"
                    />
                <button className="add">Add</button>
            </form>
        </div>
    )
}

export default Form;