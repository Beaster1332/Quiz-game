import React from "react";
import Question from "./Question/Question.jsx";
import Results from "./Results/Results.jsx";
import classes from './Quiz.module.css';

const Quiz = (props) => {

    const { questions, step } = props;

    let question = questions[step];

    return <div className={classes.quizContainer}>
        <div className={classes.quizHeader}>
            <h2>Квиз для Вас!</h2>
        </div>
        <div className={classes.quizContent}>
            {
                step !== questions.length
                    ? <Question {...question} />
                    : <Results />
            }
        </div>
    </div>
}

export default Quiz;