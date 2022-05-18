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
                    <p>There is no task to do for you.</p>
                    <p>If you think of any task that needs to be done then add task filling up the form given above. Thanks!</p>
                </>
            }
            {
                todos.map(todo => <SingleTodo key={todo._id} todo={todo} refetch={refetch}></SingleTodo>)
            }
        </div>
    );
};

export default TodoLists;