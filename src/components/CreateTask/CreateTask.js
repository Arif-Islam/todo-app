import React, { useState } from 'react';
import { toast } from 'react-toastify';

const CreateTask = () => {
    const [task, setTask] = useState('');
    const [text, setText] = useState('');
    const getTaskName = event => {
        setTask(event.target.value);
    }
    const getTaskText = event => {
        setText(event.target.value);
    }
    const addTask = event => {
        event.preventDefault();
        const todo = { name: task, description: text };
        fetch('http://localhost:5000/todo', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
            .then(res => res.json())
            .then(data => {
                console.log('todo', data);
            })
        toast.success('Task added!');
        setTask('');
        setText('');
    }
    return (
        <div className='w-full md:w-3/4 xl:w-1/2 mx-auto shadow-lg rounded-lg pt-6 border'>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-2xl text-gray-800 font-medium mb-4'>Add task to your daily routine</p>
                <form onSubmit={addTask} className='flex flex-col mb-6'>
                    <input onBlur={getTaskName} className='w-72 md:w-80 lg:w-96 xl:w-[450px] border-2 border-emerald-200 h-12 rounded focus:outline-emerald-500 p-2 mb-2' type="text" placeholder='Task Name' required />
                    <textarea onBlur={getTaskText} className='border-2 border-emerald-200 w-72 md:w-80 lg:w-96 xl:w-[450px] h-24 rounded focus:outline-emerald-500 p-2 mb-4' name="textarea" id="" placeholder='Task Description' required></textarea>
                    <button type='submit' className='w-28 mx-auto bg-emerald-500 rounded text-stone-100 font-medium p-2 hover:bg-emerald-600'>Add Task</button>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;