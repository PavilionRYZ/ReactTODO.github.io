/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Task from './Task'

const Home = () => {
    const initialArray = localStorage.getItem("task")?JSON.parse(localStorage.getItem("tasks")):[];
    const [tasks,setTask] = useState(initialArray);
    const [title,setTitle] =  useState("");
    const [description,setDescription] = useState("");
    // console.log(...tasks);


    //Adding a new task to the list of tasks.
    const submitHandler = (e) =>{
        e.preventDefault();
        setTask([...tasks,{title:title,description:description}]);
        setTitle("");
        setDescription("");
    }
    
    // delete task from the list of tasks.
    const deleteTask = (index)=>{
        const filteredArray = tasks.filter((item,i)=>{
                return i !== index;
            })
            setTask(filteredArray);
          }

          useEffect(()=>{
                localStorage.setItem("tasks",JSON.stringify(tasks))
            },[tasks]
          )

  return (
    <div className='container'>

            <h1>Note Your Tasks</h1>

        <form onSubmit={submitHandler}>
            <input  type="text" placeholder="Title"  value={title} onChange={(e)=>{
                setTitle(e.target.value)}
            }/>
            <textarea placeholder='Description'
            value={description} onChange={(e)=>{
                setDescription(e.target.value)}
            }
            ></textarea>
            <button type='submit'>Add</button>
        </form>

    {tasks.map((item,index) => (
            <Task key={index} 
            title={item.title}
             description={item.description} 
             deleteTask={deleteTask}
             index={index}
             />
    ))}

    </div>
  )
}

export default Home
