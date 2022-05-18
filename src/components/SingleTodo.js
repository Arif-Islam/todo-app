import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SingleTodo = ({ todo, refetch }) => {
    const { _id, name, description } = todo;
    const [strike, setStrike] = useState(false);
    const completeTask = id => {
        setStrike(true);
        console.log(strike)
        // toast.success(`Well done! You've completed `)
    }
    const deletetask = id => {
        fetch(`http://localhost:5000/todo/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast('Task deleted successfully');
                refetch();
                console.log('delete', data);
            })
    }
    return (
        <div className='w-full md:w-3/4 xl:w-1/2 mx-auto shadow-lg rounded-lg border mb-6 p-4'>
            <p className='text-2xl font-medium text-gray-800 pb-2'>{name}</p>
            <p className={(strike ? "line-through" : "no-underline") + "text-gray-800 pb-2"}>{description}</p>
            <button onClick={() => completeTask(_id)} className='w-24 mx-auto bg-emerald-500 rounded text-stone-100 font-medium p-2 hover:bg-emerald-600 mr-2'>Complete</button>
            <button onClick={() => deletetask(_id)} className='w-24 mx-auto bg-red-600 rounded text-stone-100 font-medium p-2 hover:bg-red-700'>Delete</button>
        </div>
    );
};

export default SingleTodo;