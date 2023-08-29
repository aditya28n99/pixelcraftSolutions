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
 
    </div>
     </>  )
}
