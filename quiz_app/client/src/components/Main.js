import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../styles/Main.css'
import { setUserId } from '../redux/result_reducer'

export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    function startQuiz(){
      if(inputRef.current?.value){
          dispatch(setUserId(inputRef.current?.value))
          
      }
    }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <ol>
        <li>You will be ask 10 questions one after another.</li>
        <li>10 points is awarded for the correct answer.</li>
        <li>Each question has three options. You can choose only one option.</li>
        <li>You can review and change answers before the quiz finish.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

<form id="form">
    <input ref={inputRef} className="userid" type="text" placeholder='username*'/>
</form>

<div className='start'>
<a className='start btn' href='/quiz' onClick={startQuiz}>Start Quiz</a>
</div>

    
</div>
  )
}
