import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TabButton from './components/TabButton';
import { MdCheck } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";

function App() {
  const [ name, setName ] = useState("");
  const [ description, setDescription ] = useState("");
  const [ selectedButton, setSelectedButton ] = useState("todo");

  const [ todoList, updateTodoList ] = useState([
    {
      title : "DSA",
      description : " Solve 5 problems on Arrays"
    },
  ]);

  const [ completedList, updateCompletedList ] = useState ([]);

  function addListHandler() {
    if (name!=="" && description!==""){
      let newTodo = {title: name, description: description}
      updateTodoList([...todoList, newTodo]);
      setName("");
      setDescription("");
    }
  }

  function handleDeleteItem(index) {
    todoList.splice(index,1);
    updateTodoList([...todoList]);
  }

  function handleCheckItem(index) {
    let completedTask = todoList.splice(index,1)
    updateCompletedList([...completedList, completedTask])
    console.log(completedList)
  }

  function handleSelect(selectedCurrently) {
    setSelectedButton(selectedCurrently);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <div className="input-container">
        <div className="input-box">
          <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
          <label>Title</label>
        </div>
        <div className="input-box">
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}></input>
          <label>Description</label>
        </div>
        <button className="primary-button" onClick={() => addListHandler()}>Add Task</button>
      </div>
      <div className="list-container">
        {/* <div className="button-container">
          <TabButton isSelected={selectedButton === "todo"} onSelect={() => handleSelect("todo")}> ToDo List </TabButton>
          <TabButton isSelected={selectedButton === "completed"} onSelect={() => handleSelect("completed")}> Completed Tasks </TabButton>
        </div> */}
        <div className="sub-list-conatiner">
          {todoList.map((todo, index) => (
            <>
              <div className="todo-task">
                <div className="task">
                  <h3>{todo.title}</h3>
                  <p>{todo.description}</p>
                </div>
                <div className="todo-task-icons">
                  {/* <MdCheck className="check-icon" onClick={() => handleCheckItem(index)} /> */}
                  {/* <MdEdit className="edit-icon" /> */}
                  <MdDelete className="delete-icon" onClick={() => handleDeleteItem(index)} />
                </div>
              </div>
              <hr />
            </>
          )
          )}
        </div>
      </div>
      <div>
        {completedList.map((task) => <div><p color='yello'>{task.title}</p><p color='red'>{task.description}</p></div>)}
      </div>
    </div>
  );
}

export default App;
