import React from 'react';
import PrimeChecker from './components/PrimeChecker';


export default function Home() {  
  return (
   <>
   <div className='container'>
    <h3>Write a react com that given a number prop nd display wether number is prime or not</h3>
    <PrimeChecker number={11}/>
    {/* <PrimeNumber n={3}/> */}
    </div>
    </>
  );
}
