import React from 'react'

export default function Functions() {

  //function declarations
  function firstFunction(){
    console.log("this is our first function");
  };

  firstFunction();

  // function Expression  
  const NewFunck = function(name){
    return `Hi, MySelf ${name}`;
  }

  console.log(NewFunck('Aditya'));

  //Arrow Functions
  const newArrowFunk = () =>{
    return `this funtions always anonymous and do not have their own this, arguments, or super bindings.`
  }

  console.log(newArrowFunk());

  //  IIFE (Immediately Invoked Function Expression):

(function(a, b) {
  return console.log(`the sum of numbers 5 and 7 is : ${a + b}`);
})(5,7);

// Define a generator function
function* myGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Create an iterator from the generator
const generator = myGenerator();

// Use the iterator
console.log(generator.next().value); // 1
console.log(generator.next().value); // 2
console.log(generator.next().value); // 3
console.log(generator.next().value); // undefined (no more values)



  return (
    <>
    <div className='container border'>
    <h3>Here will see all about Javascript funtions:</h3>
    <p><strong>1. Function Declarations </strong><br/>
    A function declaration defines a function with a name and can be called before its definition in the code.</p>
    <p><strong>2. Function Expressions </strong><br/>  
A function expression creates a function and assigns it to a variable. Function expressions can be named or anonymous.</p>
    <p><strong>3. Arrow Functions</strong><br/>  
    Arrow functions provide a shorter syntax for writing functions. They are always anonymous and do not have their own this, arguments, or super bindings.</p>
    <p><strong>4. Return Statements</strong><br/>  
The return statement ends function execution and specifies a value to be returned to the function caller.</p>
    <p><strong>4. Immediately Invoked Function Expression</strong><br/>  
    Immediate Execution: IIFEs are executed immediately after they are defined.<br/>
    Scope Isolation: IIFEs create a new scope, preventing variables from leaking into the global scope.</p>
    </div>
     </>  )
}
