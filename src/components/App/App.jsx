import React from 'react';
import QuizContainer from '../Quiz/QuizContainer.jsx';
import classes from './App.module.css';

const App = () => {
    return <div className={classes.appContainer}>
        <div className={classes.componentsContainer}>
            <QuizContainer />
        </div>
    </div>
}

export default App;
