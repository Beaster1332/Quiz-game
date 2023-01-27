import React from "react";
import { connect } from "react-redux";
import classes from './Results.module.css';

const Results = ({ correctAnswers }) => {

    const result = () => {

        const texth3 = <h3 className={classes.correctAnswers}> Ваш результат: <span className={classes.correctNum}>{correctAnswers}</span>!</h3>;

        if (correctAnswers < 1) {
            return <>
                {texth3}
                <h4>Попробуйте ещё раз!</h4>
            </>
        } else if (correctAnswers <= 2) {
            return <>
                {texth3}
                <h4>Вы молодец, но можете лучше!</h4>
            </>
        } else {
            return <>
                {texth3}
                <h4>Вы справились на отлично!</h4>
            </>
        }
    }

    return <div className={classes.resultsContainer}>
        {result()}
    </div>
}

const mapStateToProps = (state) => {
    return {
        correctAnswers: state.quizReducer.correctAnswers
    }
}

export default connect(mapStateToProps, null)(Results);