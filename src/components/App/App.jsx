import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'; 
import ToDoList from '../ToDoList/ToDoList.jsx';
import Header from '../Header/Header.jsx';
import DoneList from '../DoneList/DoneList.jsx';
import ToDoForm from '../ToDoForm/ToDoForm.jsx';

function App () {
  const [task, setTask] = useState('');
  const [toDoArray, setToDoArray] = useState([]);
  const [doneArray, setDoneArray] = useState([]);

  // creating a checkbox to mark task completion
  // reference: https://www.tutorialspoint.com/how-to-use-checkboxes-in-reactjs 
  const [completion, setCompletion] = useState(false); 

  // creating table sorting options
  // reference: https://stackoverflow.com/questions/72254047/sort-table-by-clicking-on-the-column-header
  // const [sorting, setSorting] = useState({field: 'id', ascending: false});
  
  // TO DO: GET to call tasks
  const fetchTasks = () => {
    axios.get('/api/todo').then((response) => {
      console.log('Data:', response.data);
      setToDoArray(response.data);
    }).catch((error) => {
      console.error(error);
      alert('Something went wrong loading your tasks!')
    });
  }

  const fetchDone = () => {
    axios.get('/api/todo/move').then((response) => {
      console.log('Data:', response.data);
      setDoneArray(response.data);
    }).catch((error) => {
      console.error(error);
      alert('Something went wrong loading your completed tasks!')
    });
  }

  // TO DO: on load, call fetchTasks() function
  useEffect(() => {
    fetchTasks();
    fetchDone();
  }, []);

  return (
    <div>
      <header>
        <Header />
      </header>
      {/* TO DO: form for inputting tasks */}
      <ToDoForm task={task} setTask={setTask} completion={completion} setCompletion={setCompletion} fetchDone={fetchDone} fetchTasks={fetchTasks}/>
      {/* <p>
        New task: {task}
      </p> */}
      {/* TO DO: list of tasks with task completion update (checkbox?) and delete button for removing */}
      <ToDoList toDoArray={toDoArray} setCompletion={setCompletion} fetchDone={fetchDone} fetchTasks={fetchTasks} />
        <h2>look at you go!</h2>
        <h3>here's what you've already done</h3>
      <DoneList doneArray={doneArray} fetchDone={fetchDone} fetchTasks={fetchTasks} />
    </div>
  );

}

export default App
