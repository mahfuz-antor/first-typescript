import React, { useState } from 'react';
import NewTask from './NewTask';

interface ITask {
    name: string,
    email: string,
}

const AllTasks = () => {

    const [task, setTask] = useState("")
    const [taskMail, setEmail] = useState("")
    console.log('Task Name', task)
    console.log('Task Mail', taskMail)
    const [taskList, setTaskList] = useState<string[]>([])

    const AddButton = () => {
        setTaskList([...taskList, task])
        setTask("")
        setEmail("")
    }
    console.log('click this', taskList)

    return (
        <div style={{
            backgroundColor: '#b09b62',
            color: 'rgb(3 100 117)',
            overflow: 'hidden'
        }}>
            <h1 className="p-5"> All Tasks</h1>
            <div className="form">
                <input style={{ width: '25%', boxShadow: '0px 5px 20px blue', border: 'none', margin: '5px', borderRadius: '7px', fontSize: '20px' }}
                    onBlur={(e) => setTask(e.target.value)}
                    name='name' placeholder="Task Name" type="text" /> <br />

                <input style={{ width: '25%', boxShadow: '0px 5px 20px blue', border: 'none', margin: '5px', borderRadius: '7px', fontSize: '20px' }}
                    onBlur={(e) => setEmail(e.target.value)}
                    name='email' placeholder="example@gmail.com" type="text" /> <br />

                <button style={{ width: '25%', boxShadow: '0px 5px 20px blue', border: 'none', margin: '5px', borderRadius: '7px', fontSize: '20px' }} onClick={AddButton}>Add</button>
            </div>
            <div >


                {
                    taskList.map((task) => <NewTask name={task} email={task} />)
                }

            </div>

        </div>
    );
};

export default AllTasks;