import React from 'react';
import AddTodo from "./components/AddTodo";
import TodoItem from './components/TodoItem';
import "./styles.css"

function App() {

  const [todoList, setTodoList] = React.useState([])
   
  function additemtolist(thingy){
    setTodoList(prevVal => ([
      ...prevVal,
      {
        description: thingy,
        status: false
      }
    ]))
  }

  const todoItemElements = todoList.map(elem => <TodoItem key={Math.random()*20} txt={elem.description}/>)

  console.log(todoList)

  return (
    <div className="App">
      <h1>Todo Input</h1>
      <AddTodo handleClick={() => additemtolist(document.getElementById("in").value)}/>
      <h1>Todo list</h1>
      <div>
        {todoItemElements}
      </div>
    </div>
  );
}

export default App;
