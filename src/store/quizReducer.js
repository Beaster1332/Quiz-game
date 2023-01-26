import { questionsForReducer } from "./Data/questionsForReducer.js";

const PLUS_STEP = 'quiz/PLUS_STEP';
const PLUS_CORRECT_ANSWER = 'quiz/PLUS_CORRECT_ANSWER';
const COME_BACK_TO_START = 'quiz/COME_BACK_TO_START';

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
        case COME_BACK_TO_START:
            return {
                ...state,
                step: 0,
                correctAnswers: 0,
            }
        default:
            return state
    }
}

export const plusStepAC = () => ({ type: PLUS_STEP });
export const plusCorrectAnswersAC = () => ({ type: PLUS_CORRECT_ANSWER });
export const comeBackToStartAC = () => ({ type: COME_BACK_TO_START });

export default quizReducer;