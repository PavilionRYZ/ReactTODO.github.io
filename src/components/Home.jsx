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

          // Effect to save data to local storage whenever data changes
          useEffect(()=>{
                localStorage.setItem("tasks",JSON.stringify(tasks))
            },[tasks]
          );

          // Effect to retrieve data from local storage when the component mounts
            useEffect(()=>{
                const data = localStorage.getItem("tasks");
                if(data){
                    setTask(JSON.parse(data));
                }
            },[]);// The empty dependency array ensures that this effect runs only once when the component mounts

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
