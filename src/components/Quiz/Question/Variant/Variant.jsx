import React from "react";
import { connect } from "react-redux";
import { plusStepAC, plusCorrectAnswersAC } from "../../../../store/quizReducer.js";
import classes from './Variant.module.css';

const Variant = (props) => {

    const { correct,
        index,
        variant,
        nextStep,
        plusCorrect } = props;

    const onClickVariant = () => {
        if (index === correct) {
            plusCorrect();
            nextStep();
        } else {
            nextStep();
        }
    }

    return <div className={classes.variantBlock} onClick={() => onClickVariant()}>
        {variant}
    </div>
}

const mapDispatchToProps = (dispatch) => {
    return {
        nextStep: () => dispatch(plusStepAC()),
        plusCorrect: () => dispatch(plusCorrectAnswersAC()),
    }
}

export default connect(null, mapDispatchToProps)(Variant);