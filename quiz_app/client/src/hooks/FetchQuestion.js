import { useEffect, useState } from "react"
import data from "../database/data";
import { useDispatch } from "react-redux";


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
                let question = await data;

                if(question.length > 0 ){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : question}));

                    /**dispatch on action */
                    dispath(Action.startExamAction(question ))
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

/**move Action dispatch function */
export const moveNextAction = () => async(dispatch) => {
    try {
        dispatch(Action.moveNextAction())
    } catch (error) {
        Console.log(error)
    }
}