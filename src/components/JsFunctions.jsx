import React from 'react'

export default function JsFunctions() {

    function sumOfNum (x, y){
        return x + y;
    }

    function sortedArray({data}){

        let sortedData = data.sort(a, b)
        return sortedData;
    }
    const data = [
        {name: 'aditya'},
        {name: 'vaishnavi'},
        {name: 'saniya'},
        {name: 'shital'},
        {name: 'pooja'},
    ]
  return (
    <>
    <div className='container'>
    <h3>Populer JavaScript Functions Funtions</h3>
    <div className='subcontainer'>
        <h4>1. Write a JavaScript function to calculate the sum of two numbers.  </h4>
        <h4>the addition of 2 + 2 = {sumOfNum(2, 2)}</h4>
        <br/>
        <h4> Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.</h4>
        <h4>sorted arry for data is:
            {
                data.map((name, index) =>{
                    return
                    <ul>
                        <li key={index} value={name}></li>
                    </ul>
                })
            }
        </h4>
    </div>
    </div>
        
    </>
  )
}
