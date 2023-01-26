import { connect } from "react-redux";
import { comeBackToStartAC } from "../../store/quizReducer.js";
import Quiz from "./Quiz.jsx";

let mapStateToProps = (state) => {
    return {
        questions: state.quizReducer.questions,
        step: state.quizReducer.step,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        comeBack: () => dispatch(comeBackToStartAC()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);