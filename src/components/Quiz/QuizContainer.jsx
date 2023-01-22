import { connect } from "react-redux";
import Quiz from "./Quiz.jsx";

let mapStateToProps = (state) => {
    return {
        questions: state.quizReducer.questions,
        step: state.quizReducer.step,
    }
}

export default connect(mapStateToProps, null)(Quiz);