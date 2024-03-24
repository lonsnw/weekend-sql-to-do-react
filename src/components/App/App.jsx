import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'; 

function App () {
  const [task, setTask] = useState('');
  // const [completion, setCompletion] = useState('');
  const [toDoArray, setToDoArray] = useState([]);

  // creating a checkbox to mark task completion
  // reference: https://www.tutorialspoint.com/how-to-use-checkboxes-in-reactjs 
  const [completion, setCompletion] = useState(false); 
  
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
    
  const addTask = (evt) => {
    evt.preventDefault();
    console.log(`This is your new task: ${task}; its completion status is ${completion}`);
    // TO DO: POST to add task to database
    const dataToSend = { task: task, completion: completion };
    axios.post('/api/todo', dataToSend).then((response) => {
      fetchTasks();
      // also clear fields
      setTask('');
      setCompletion('');
    }).catch((error) => {
      console.error(error);
      alert('Something went wrong saving your new task!');
    })
  }

  const deleteTask = (taskId) => {
  // TO DO: Delete a task
    axios.delete(`/api/todo/${taskId}`).then((response) => {
      fetchTasks();
    }).catch((error) => {
      console.error('Error in DELETE', error);
      alert('Something went wrong deleting your task');
    });
  }

  // TO DO: Update a task's status
  const handleChange = (e) => {
    setCompletion(e.target.checked);
    console.log(e.target.id)
  }

  const updateTask = (taskId) => {
    axios.put(`/api/todo/${taskId}`).then((response) => {
      fetchTasks();
    }).catch((error) => {
      console.error('Error in PUT', error);
      alert('Something went wrong updating your task');
    });
  }

  return (
    <div>
      <h1>let's get stuff done</h1>
      {/* TO DO: form for inputting tasks */}
      <form onSubmit={addTask}>
        <label htmlFor="task-input">Task:</label>
        <input id="task-input" value={task} onChange={e => setTask(e.target.value)} />
        <br />
        <button type="submit">Add to list</button>
      </form>
      {/* <p>
        New task: {task}
      </p> */}
      {/* TO DO: list of tasks with task completion update (checkbox?) and delete button for removing */}
      {toDoArray.map((item) => {
        return <table>
          <tr key={item.id}>
          <td><input value="test" type="checkbox" onClick={(e) => {handleChange(e); updateTask(item.id)}} /></td>
          <td className="task">{item.task}</td> 
          {/* Got help on how to do the button here: https://react.school/ui/button */}
          <td><button onClick={() => deleteTask(item.id)}>Delete</button></td>
        </tr>
        </table>
      })
      }
    </div>
  );

}

export default App
