import React,  { useEffect } from 'react'
import Questions from './Questions'

/**redux store import */
import {useSelector} from 'react-redux'

export default function Quiz() {
  
  const state = useSelector(state => state)

  useEffect(() => {
    //console.log(state)
  })

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
  );
}
