import React from 'react'

export default function DSA() {

  let arr = [1,2,3,7,5];

    function getFirstElement(arr){
        return arr[2];
    }

    function printAllElements(arr){
      let result = [];
      for(let i = 0; i<arr.length; i++){
        result.push(arr[i]);
      }
      return result;  
    }
    console.log('this is printallelements result:' ,printAllElements(arr));

    function sumFirstTwo(arr){
      let result = arr[0] + arr[1];
      return result;
    }
    console.log("this is res for sumFirstTwo:", sumFirstTwo(arr));
    
    function bubbleSort(arr) {
      for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
          if(arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
              }
            }
          }
          return arr;
        }
        console.log("this is res for bubbleSort:", bubbleSort(arr));



    return (
      <>
        <div className='container mt-4'>
          Let’s Start with Time Complexity using JavaScript
        </div>
        <div className='container mt-2'>
          <div className='border p-4'>
          <p>
            Imagine you have a list of numbers, and you want to know how much time it will take to do something with this list, like finding a number, sorting it, etc.
            <br />

            <strong>Example 1: Constant Time - O(1)</strong>
            <br />
            This means no matter how big your list is, it always takes the same amount of time.
          </p>
          <p>
            <code>
            let arr = [1, 2, 3, 4];
            <br/>
              function getFirstElement() {'{'}
              <br />
              {'  '}return arr[0];
              <br />
              {'}'}
            </code>
          </p>
          <p>
            Calling the function <code>getFirstElement()</code>, Answer: {getFirstElement(arr)}
          </p>
        </div>

        {/* New Line */}
        </div>
        <div className='container mt-2'>
          <div className='border p-4'>
          <p>
            <br />

            <strong>Example 1: Constant Time - O(1)</strong>
            <br />
            This means no matter how big your list is, it always takes the same amount of time.
          </p>
          <p>
            <code>
              function printAllElements() {'{'}
              
              {'}'}
            </code>
          </p>
          <p>
            Calling the function <code>getFirstElement()</code>, Answer: {printAllElements(arr)}
          </p>
        </div>
        {/* New line */}
        <div className='mt-2'>
          <p><strong>Now, Space Complexity using JavaScript</strong></p>
          <p>Space complexity is about how much memory or space you need to run an algorithm.</p>
        </div>
        </div>
        {/* vvv */}
        <div className='container mt-2'>
          <div className='border p-4'>
          <p>
            <br />

            <strong>Example 1: Constant Space - O(1)</strong>
            <br />
            This means the space needed doesn’t change with the size of the input.</p>
          <p>
            <code>
              function sumFirstTwo() {'{'}
              
              {'}'}
            </code>
          </p>
          <p>
            Calling the function <code>getFirstElement()</code>, Answer: {sumFirstTwo(arr)}
          </p>
        </div>

        {/* end */}
            </div>
      </>
    );
}
