import axios from 'axios'; 

function DoneList ({doneArray, fetchDone, fetchTasks}) {
    const deleteTask = (taskId) => {
        // STRETCH: Delete task from completed task list
        axios.delete(`/api/todo/move/${taskId}`).then((response) => {
          fetchTasks();
          fetchDone();
        }).catch((error) => {
          console.error('Error in DELETE', error);
          alert('Something went wrong deleting your task');
        });
      }

    return (
    <table className="doneTable">
        <thead>
          <th>Task</th>
          <th>⊘</th>
        </thead>
        <tbody>
        {doneArray.map((item) => {
          return <tr key={item.id} className="done">
          <td className="task">{item.task}</td> 
          <td><button onClick={() => deleteTask(item.id)}>Delete</button></td>
          </tr>
          })
        }
        </tbody>
      </table>
    )
}

export default DoneList;