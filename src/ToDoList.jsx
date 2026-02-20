import React, {useState} from 'react';

function ToDoList() {

    const [tasks, setTasks] = useState(["Dorucak", "Peri zube", "Bus"]);
    const [newTask, setNewTask] = useState("");


    function handleInputChange(event) {
      setNewTask(event.target.value);
    }

    function addTask() {

    }

    function deleteTask(index) {

    }

    function moveTaskUp(index) {

    }

    function moveTaskDown(index) {

    }


    return(
            <div className="To-doList">
                    <h1>To do lista</h1>


                <div>
                    <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                    <button className="add-button" onClic={addTask}>
                    Add
                    </button>
                </div> 


                <ol>
                    {tasks.map((task, index) => 
                        <li key={index} >
                            <span className="text">{task}</span>
                            <button className="delete-button" onClick={() =>deleteTask}>delete</button>
                            <button className="moveUp-button" onClick={() =>moveTaskUp}>Move up</button>
                            <button className="moveDown-button" onClick={() =>moveTaskDown}>Move down</button>
                            </li>
                    ) }


                </ol>


            </div>



    );

}

export default ToDoList