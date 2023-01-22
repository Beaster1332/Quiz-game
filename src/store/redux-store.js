import { combineReducers, legacy_createStore as createStore } from "redux";
import quizReducer from "./quizReducer.js";

const reducers = combineReducers({
    quizReducer,
});

const store = createStore(reducers);

export default store;