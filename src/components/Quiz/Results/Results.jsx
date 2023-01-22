import React from "react";
import { connect } from "react-redux";

const Results = ({ correctAnswers }) => {
    return <div>
        {correctAnswers}
    </div>
}

const mapStateToProps = (state) => {
    return {
        correctAnswers: state.quizReducer.correctAnswers
    }
}

export default connect(mapStateToProps, null)(Results);