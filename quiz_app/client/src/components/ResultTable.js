import React,{useEffect, useState} from 'react'
//import {getServerData} from "../helper/helper"


export default function ResultTable() {

  const [data,setData]= useState([])

 // useEffect
 
  return (
    <div>
      <table>
        <thead className='table-header'>
            <tr className='table-row'>
                <td>Name</td>
                <td>Attemps</td>
                <td>Earn points</td>
                <td>Result</td>
            </tr>
        </thead>
        <tbody>
            <tr className='table-body'>
                <td>Nima</td>
                <td>03</td>
                <td>20</td>
                <td>Passed</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}
