import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'; 

function App () {
  const [task, setTask] = useState('');
  const [completion, setCompletion] = ('');
  const [toDoArray, setToDoArray] = useState([]);
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
// TO DO: on load, call fetchTasks() function
useEffect(() => {
  fetchTasks();
}, []);
  
// TO DO: POST to add task to database
// also clear fields
  return (
    <div>
      <h1>TO DO APP</h1>
      {/* TO DO: form for inputting tasks */}
      {/* TO DO: list of tasks with task completion update (checkbox?) and delete button for removing */}
    </div>
  );

}

export default App
