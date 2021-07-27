import React, { FocusEvent } from 'react';

interface ITask {
    name: string,
    email: string,
}

const NewTask = ({name, email}: ITask) => {

 
    return (
        <div>

           <div  style={{overflow: 'hidden', float: 'left'}} className="row pt-3">
           <h2>
                <strong>Name:</strong> {name}
            </h2>
            <h4>
                <strong>Email:</strong> {email}
            </h4>
           </div>
        </div>
    );
};

export default NewTask;