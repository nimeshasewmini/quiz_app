import {configuerStore} from '@reduxjs/toolkit'

/**call reducer */
import rootReducer from '../reducers'; 
import questionReducer from './question_Reducer';
import {resultReducer} from './result_reducer';
import rootReducer from '../reducers'; 
const store = createStore(rootReducer);

export default store;

const rootReducer = combineReducers({
    questions :questionReducer,
    result : resultReducer
})

/**create store with reducer */
export default configuerStore({ reducer : rootReducer })