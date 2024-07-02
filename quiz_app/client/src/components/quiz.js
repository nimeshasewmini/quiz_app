import React,  { useEffect, useState } from 'react'
import Questions from './questions'
import {moveNextQuestion , movePrevQuestion } from '../hooks/FetchQuestion';
import {PushAnswer} from '../hooks/setResult'

/**redux store import */
import {useSelector , useDispatch} from 'react-redux'
import { Navigate } from 'react-router-dom';


export default function Quiz() {
  const[check, setChecked] =useState(undefined)

  const result =  (state => state.result.result);
  const {queue,trace} = useSelector(state => state.questions);
  const dispatch = useDispatch()

  /**next buttton event handler */
  function onNext(){
    //console.log('On next click')

          if(trace < queue.length){
                //update the trace value by one using mov NECXT question 
                dispatch(moveNextQuestion());

                //insert a new result in the array
              if(result.length<=trace){
                dispatch(PushAnswer(check))
              }                
          }
          setChecked(undefined)
  }

  /**prev buttton event handler */
  function onPrev(){
    //console.log('on prev click')
    if(trace > 0)
          { //decrease the trace value by one using mov prev question 
            dispatch(movePrevQuestion());
          }
  }

        function onChecked(check){
            setChecked(check)
        }
        /**finish exam after the last question */
        if(result.length && result.length>= queue.length){
          return <Navigate to={'/result'} replace={true}> </Navigate>
        }


  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions*/}
      <Questions onChecked={onChecked}/>


      <div className='grid'>
       {trace > 0 ?  <button className='btn prev' onClick={onPrev}>Prev</button> : <div></div>}
        <button className='btn next' onClick={onNext}>Next</button>
        
      </div>

    </div>
  )
}

