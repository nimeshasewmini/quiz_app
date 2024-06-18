import { createSlice } from "@reduxjs/toolkit"
import Result from "../components/result"

export const resultReducer = createSlice ({
    name : 'result',
    initialState : {
        userId : null,
        result : [] 
    },
    reducers : {
        setUserId : (state, action) => {
            state.userId = action.payload
        },
        pushResultAction : (state,action) => {
            state.result.push(action.payload)
        }
    }
})

export const {setUserId,pushResultAction} = resultReducer.actions;
export default resultReducer.reducer;
