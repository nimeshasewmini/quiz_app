import React from 'react'
import '../styles/Result.css'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'
import { useDispatch } from 'react-redux'

import { moveNextAction, movePrevAction } from '../redux/question_reducer';
import { pushResultAction, setUserId } from '../redux/result_reducer';

/**import actions */
import { resetAllAction } from '../redux/question_reducer'
import { resetResultAction } from '../redux/result_reducer'



export default function Result(){

  const dispatch = useDispatch()

  function onRestart(){
    dispatch (resetAllAction())
    dispatch (resetResultAction())

  }
  return(
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <div className='result flex-center'>
        <div className='flex'>
          <span>Username : </span>
          <span className='bold'> Nima </span>
        </div>

        <div className='flex'>
          <span>Total Quiz Points : </span>
          <span className='bold'>50</span>
        </div>

        <div className='flex'>
          <span>Total Questions :  </span>
          <span className='bold'>05</span>
        </div>

        <div className='flex'>
          <span>Total Attemps :  </span>
          <span className='bold'>03</span>
        </div>

        <div className='flex'>
          <span>Total Earn points :  </span>
          <span className='bold'>30</span>
        </div>

        <div className='flex'>
          <span>Quiz Result :  </span>
          <span className='bold'>Passed</span>
        </div>
      </div>
      
      <div className='start'>
        <Link className='restart btn' to={'/'} onClick={onRestart}>Restart</Link>
      </div>

      <div className='container'>
         {}
        <ResultTable></ResultTable>
      </div>

    </div>
  )
}