import React from 'react';
import Banner from '../../components/Banner/Banner';
import CreateTask from '../../components/CreateTask/CreateTask';
import TodoLists from '../../components/TodoLists';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CreateTask></CreateTask>
            <TodoLists></TodoLists>
        </div>
    );
};

export default Home;