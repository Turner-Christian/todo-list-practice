import React from "react";

const Display = (props) => {
    const { todoList, deleteButton, handleCompleted } = props;

    return (
        <>
            {
                todoList.map((todo, index) => (
                    <div key={todo.id} className="flex todo">
                        <p className={
                            todo.isComplete?
                            'lineThrough' : 'none'}>
                            {todo.content}
                        </p>
                        <div>
                            <input onChange={() => handleCompleted(todo)} type="checkbox" className="container" />
                            <span className="checkmark"></span>
                            <button onClick={() => deleteButton(todo.id)}>DELETE</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Display;