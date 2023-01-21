import React from 'react';
import Quiz from '../Quiz/Quiz.jsx';
import classes from './App.module.css';

const App = () => {
    return <div className={classes.appContainer}>
        <div className={classes.componentsContainer}>
            <Quiz />
        </div>
    </div>
}

export default App;
