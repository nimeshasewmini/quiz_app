import React from 'react'
import Questions from './Questions';
import { Link } from 'react-router-dom';


export default function quiz() {
    
  /**next buttton event handler */
  function onNext(){
    console.log('On next click')
  }

  /**prev buttton event handler */
  function onPrev(){
    console.log('On prev click')
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
  )
}
