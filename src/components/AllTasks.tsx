import React, { useState } from 'react';
import NewTask from './NewTask';

const AllTasks = () => {

    const [task, setTask] = useState("")
// console.log('All Input here', task)
    const [taskList, setTaskList] = useState<string[]>([])

    const AddButton = () => {
        setTaskList([...taskList, task])
        setTask("")
    }
    console.log('click this', taskList)

    return (
        <div style={{
            backgroundColor:'#b09b62', 
            color: 'rgb(3 100 117)',
            overflow:'hidden'
        }}>
            <h1 className="p-5">All Tasks</h1>
            <div className="form">
                <input style={{width: '25%', border: '2px solid blue', borderRadius: '10px', fontSize: '20px'}}
                onChange={(e) => setTask(e.target.value)}
                name='name' placeholder="Task Name" type="text" />
                <button style={{width: '5%', border: '2px solid blue',borderRadius: '10px', fontSize: '20px'}} onClick={AddButton}>Add</button>
            </div>
            <div >
          

            {
                taskList.map((task) => <NewTask name={task} email="khan@gmail.com"/>)
            }
            
            </div>
          
        </div>
    );
};

export default AllTasks;