import React,  { useEffect } from 'react'
import Questions from './Questions'
import {moveNextQuestion , movePrevQuestion } from '../hooks/FetchQuestion';
/**redux store import */
import {useSelector , useDispatch} from 'react-redux'
import {pushAnswer} from '../hooks/setResult'

export default function Quiz() {
  
  const state = useSelector(state => state=>state);
  const {queue,trace} = useSelector(state => state.questions);
  const dispatch = useDispatch()

  useEffect(() => {
    console.log(state)
  })

  /**next buttton event handler */
  function onNext(){
    console.log('On next click')
          if(trace < queue.length){
                //update the trace value by one using mov NECXT question 
                dispatch(moveNextQuestion());

                dispatch(pushAnswer(1))
          }

  }

  /**prev buttton event handler */
  function onPrev(){
    console.log('on prev click')
    if(trace > 0)
          { //decrease the trace value by one using mov prev question 
            dispatch(movePrevQuestion());}
  }



  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions*/}
      <Questions/>


      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
        
      </div>

    </div>
  );
}
