import React, { useEffect } from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch, useSelector } from 'react-redux'
import { attempts_Number, earnPoints_Number, flagResult} from '../helper/helper'


/**import actions */
import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
import { usePublishResult } from '../hooks/setResult'
//import{usePublishResult} from '../hooks/setResult';



export default function Result(){

  const dispatch = useDispatch()
  const {questions : {queue,answers}, result : {result, userID}} = useSelector (state => state)

  useEffect(()=> {
    console.log(flag)
  })
  const totalPoints = queue.length *10;
  const attempts = attempts_Number(result);
  const earnPoints = earnPoints_Number(result,answers,10)
  const flag = flagResult (totalPoints, earnPoints)

    /**user result */
    usePublishResult({
      result, 
      username: userID, 
      attempts, 
      points : earnPoints, 
      achived: flag? "pass":"fail"})
    

  
function onRestart() {
  dispatch(resetAllAction())
  dispatch(resetResultAction())
}
/* 
  usePublishResult({
    result,
    username : userID,
    attempts,
    points : earnPoints,
    achived : flag ? "passed" : "failed"
  });
*/
  return(
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span>Username : </span>
          <span className='bold'> {userID || ""}</span>
        </div>

        <div className='flex'>
          <span>Total Quiz Points : </span>
          <span className='bold'>{totalPoints || 0}</span>
        </div>

        <div className='flex'>
          <span>Total Questions :  </span>
          <span className='bold'>{queue.length || 0}</span>
        </div>

        <div className='flex'>
          <span>Total Attemps :  </span>
          <span className='bold'>{attempts || 0}</span>
        </div>

        <div className='flex'>
          <span>Total Earn points :  </span>
          <span className='bold'>{earnPoints || 0}</span>
        </div>

        <div className='flex'>
          <span>Quiz Result :  </span>
          <span style={{color : `${flag ? "#2aff95" : "ff2a66"}`}} className='bold'>{ flag ? "passed" : "failed" }</span>
        </div>
      </div>
      
      <div className='start'>
        <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      <div className='container'>
         {}
        <ResultTable></ResultTable>
      </div>

    </div>
  )
}