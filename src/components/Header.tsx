import React from 'react';
import AllTasks from './AllTasks';
import toDo from '../images/toDo-2.jpg';
import "bootstrap/dist/css/bootstrap.css";

const Header = () => {
    return (
        <div>
            <div style={{backgroundColor:'rgb(219 206 164)', color:'rgb(3 100 117)'}} className="row">
                <div className="col-md-4 align-self-center">
                    <h1>Create Your Own Tasks <br /> From Here</h1>
                </div>
                <div className="col-md-8">
                <img style={{width:'100%'}} src={toDo} alt="" />
                </div>
            </div>
            <AllTasks />
        </div>
    );
};

export default Header;