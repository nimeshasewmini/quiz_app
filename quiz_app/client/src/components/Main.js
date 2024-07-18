import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Main.css';
import { setUserId } from '../redux/result_reducer';

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz(event) {
    event.preventDefault(); // Prevent default anchor behavior
    const userId = inputRef.current?.value;

    if (userId) {
      dispatch(setUserId(userId));
      window.location.href = '/quiz'; // Navigate to the quiz page
    } else {
      alert("Please enter a username"); // Alert user to enter a username
    }
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      <ol>
        <li>You will be asked 10 questions one after another.</li>
        <li>10 points are awarded for each correct answer.</li>
        <li>Each question has three options. You can choose only one option.</li>
        <li>You can review and change answers before the quiz finishes.</li>
        <li>The result will be declared at the end of the quiz.</li>
      </ol>

      <form id="form">
        <input ref={inputRef} className="userid" type="text" placeholder='username*' />
      </form>

      <div className='start'>
        <Link className='start btn'  to={'quiz'}  onClick={startQuiz}>Start Quiz</Link>
        
      </div>
    </div>
  );
}