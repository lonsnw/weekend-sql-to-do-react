import axios from 'axios'; 

function ToDoForm ({task, setTask, completion, setCompletion, fetchDone, fetchTasks}) {
    const addTask = (evt) => {
        evt.preventDefault();
        console.log(`This is your new task: ${task}; its completion status is ${completion}`);
        // TO DO: POST to add task to database
        const dataToSend = { task: task, completion: completion };
        axios.post('/api/todo', dataToSend).then((response) => {
          fetchTasks();
          fetchDone();
          // also clear fields
          setTask('');
          setCompletion('');
        }).catch((error) => {
          console.error(error);
          alert('Something went wrong saving your new task!');
        })
      }

    return (
        <form id="addTasks" onSubmit={addTask}>
            <label htmlFor="task-input">Task:</label>
            <input id="task-input" value={task} onChange={e => setTask(e.target.value)} />
            <button type="submit">Add to list</button>
        </form>
    )
};

export default ToDoForm;