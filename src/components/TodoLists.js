import React, { useState } from 'react';
import { useQuery } from 'react-query';
import SingleTodo from './SingleTodo';

const TodoLists = () => {
    // const [todos, setTodos] = useState([]);
    const { data: todos, isLoading, refetch } = useQuery('todo', () => fetch('http://localhost:5000/todo').then(res => res.json()));

    if (isLoading) {
        return <>
            <p className='text-center text-3xl mt-10'>Loading...</p>
        </>
    }
    return (
        <div className='mt-10 '>
            {
                !todos.length && <>
                    <div className='w-full md:w-3/4 xl:w-1/2 mx-auto shadow-lg rounded-lg border mb-6 p-4 text-gray-800'>
                        <p className='text-lg'>There is no task to do for you.</p>
                        <p className='text-lg'>If you think of any task that needs to be done then add task by filling up the form given above. Thanks!</p>
                    </div>
                </>
            }
            {
                todos.map(todo => <SingleTodo key={todo._id} todo={todo} refetch={refetch}></SingleTodo>)
            }
        </div>
    );
};

export default TodoLists;