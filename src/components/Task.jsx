/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Task = ({ title, description ,deleteTask,index }) => {

    return (
        <div className='task'>
            <div>
                <p>{title}</p>
                <span>{description}</span>
            </div>
            <button onClick={()=>deleteTask(index)}>&#10060;</button>
        </div>
    );
};

export default Task
