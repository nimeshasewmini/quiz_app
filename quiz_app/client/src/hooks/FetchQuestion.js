import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import {getServerData} from "../helper/helper";

/**redux actions */
import * as Action from '../redux/question_reducer'

/**fetch questions hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
    const dispath = useDispatch();
    const [getData , setGetData] = useState ({isLoading : false , apiData :[], serverError : null })

    useEffect (( ) => {
        setGetData(prev => ({...prev, isLoading : true}));

        /**async function fetch backend data */
        (async () => {
            try {
                //let question = await data;
                const [{ questions, answers }] = await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data) 
                if(questions.length > 0 ){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : questions}));

                    /**dispatch on action */
                    dispath(Action.startExamAction({question : questions,answers} ))
                }
                else{
                    throw new Error("No Question Availble ");
                }

            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [ dispath ] ); 

    return [getData , setGetData];
}

/**moveAction dispatch function */
export const moveNextQuestion= () => async(dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /**increse trace value by 1 */
    } catch (error) {
        console.log(error)
    }
}
/**PrevAction dispatch function */
export const movePrevQuestion = () => async(dispatch) => {
    try {
        dispatch(Action.movePrevAction());/**decrese trace value by 1 */
    } catch (error) {
        console.log(error)
    }
}