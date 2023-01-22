import { questionsForReducer } from "./Data/questionsForReducer.js";

const PLUS_STEP = 'quiz/PLUS_STEP';
const PLUS_CORRECT_ANSWER = 'quiz/PLUS_CORRECT_ANSWER';

let initialState = {
    questions: [
        ...questionsForReducer
    ],
    step: 0,
    correctAnswers: 0
}

const quizReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLUS_STEP:
            return {
                ...state,
                step: state.step + 1,
            }
        case PLUS_CORRECT_ANSWER:
            return {
                ...state,
                correctAnswers: state.correctAnswers + 1,
            }
        default:
            return state
    }
}

export const plusStepAC = () => ({ type: PLUS_STEP });
export const plusCorrectAnswersAC = () => ({ type: PLUS_CORRECT_ANSWER });

export default quizReducer;