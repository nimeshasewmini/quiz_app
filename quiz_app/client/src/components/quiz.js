import React from 'react'
import questions from './questions'


export default function quiz() {
  {/*prev buttton event handler */}
  function onPrev(){
    console.log('On  onprev click')
  }
  {/*next buttton event handler */}
  function onNext(){
    console.log('On onnext click')
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions*/}
      <questions/>

      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>

      </div>

    </div>
  )
}
