import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Display from './components/Display';

function App() {
  const [ todoList, setTodoList ] = useState([]);


  const updateTodoList = (newTodo) => {
    setTodoList((prevTodo) => (
      [...prevTodo, newTodo]
    ));
  }

  const deleteButton = (idFromBelow) => {
    const filteredTodos = todoList.filter((todo) => {
      console.log(todo)
      return todo.id != idFromBelow;
    })
    setTodoList(filteredTodos);
  }

  const handleCompleted = (todoFromBelow) => {
    let updateTodos = todoList.map((todo) => {
      if(todo === todoFromBelow){
        let newTodo = {...todo}
        newTodo.isComplete = !newTodo.isComplete;
        return newTodo;
      }
      else{
        return todo;
      }
    })
    setTodoList(updateTodos)
  }

  return (
    <>
      <Form updateTodoList={updateTodoList}/>
      <Display todoList={todoList} deleteButton={deleteButton} handleCompleted={handleCompleted}/>
    </>
  )
}

export default App
