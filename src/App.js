import React from 'react';
import { nanoid } from 'nanoid'
import AddTodo from "./components/AddTodo";
import TodoItem from './components/TodoItem';
import "./styles.css"

export default function App() {

  const [todoList, setTodoList] = React.useState([])

  function additemtolist(thingy) {
    setTodoList(prevVal => ([
      ...prevVal,
      {
        id: nanoid(),
        description: thingy,
      }
    ]))
  }

  function deleteItem(idtoDel) {
    setTodoList(prevVal => prevVal.filter(item => item.id !== idtoDel))
  }

  const todoItemElements = todoList.map(elem => <TodoItem
    key={elem.id}
    txt={elem.description}
    del={() => deleteItem(elem.id)}
  />)

  return (
    <div className="App">
      <h1>Todo Input</h1>
      <AddTodo handleClick={() => additemtolist(document.getElementById("in").value)} />
      <h1>Todo list</h1>
      <div className='todo-list'>
        {todoItemElements}
      </div>
    </div>
  );
}


