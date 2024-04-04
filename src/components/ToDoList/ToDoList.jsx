import axios from 'axios'; 

function ToDoList ({toDoArray, setCompletion, fetchDone, fetchTasks}) {
      // Setting up checkbox
  const handleChange = (e) => {
    setCompletion(e.target.checked);
    console.log(e.target.id)
  }

  // TO DO: Update a task's status
  const updateTask = (taskId) => {
    axios.put(`/api/todo/${taskId}`).then((response) => {
      fetchTasks();
      fetchDone();
    }).catch((error) => {
      console.error('Error in PUT', error);
      alert('Something went wrong updating your task');
    });
  }

  const archiveTask = (taskId) => {
    // STRETCH: Delete task from one table and move it to another
    axios.put(`/api/todo/move/${taskId}`).then((response) => {
      fetchTasks();
      fetchDone();
    }).catch((error) => {
      console.error('Error in PUT', error);
      alert('Something went wrong moving your task');
    });
    // TO DO: Delete a task
    axios.delete(`/api/todo/${taskId}`).then((response) => {
      fetchTasks();
      fetchDone();
    }).catch((error) => {
      console.error('Error in DELETE', error);
      alert('Something went wrong archiving your task');
    });
  }

    return (
        <table className="toDoTable">
          <thead>
            <tr>
              <th>✔</th>
              <th>Task</th>
              <th>📂</th>
            </tr>
          </thead>
          <tbody>
          {toDoArray.map((item) => {
            // adding conditional class to indicate more obviously while tasks are complete
            // resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
            return <tr key={item.id} className={item.completion ? "done" : "notDone"}>
            <td className="checkContainer"><input type="checkbox" onChange={(e) => {handleChange(e); updateTask(item.id)}} checked={item.completion}/><span className="checkmark"></span></td>
            <td className="task">{item.task}</td> 
            {/* Got help on how to do the button here: https://react.school/ui/button */}
            <td><button onClick={() => archiveTask(item.id)}>Archive</button></td>
            </tr>
            })
          }
          </tbody>
        </table>
    )
};

export default ToDoList;