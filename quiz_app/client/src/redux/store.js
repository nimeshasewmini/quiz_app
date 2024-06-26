import { combineReducers, configureStore } from '@reduxjs/toolkit';
/**call reducer */
import QuestionReducer from './question_reducer'
import resultReducer from './result_reducer';

const rootReducer = combineReducers({
    questions : QuestionReducer,
    result : resultReducer
})

/**create store with reducer */
export default configureStore ({ reducer : rootReducer });