import React from 'react';
import PrimeChecker from './components/PrimeChecker';
import NameList from './components/NameList';
import JsFunctions from './components/JsFunctions';

let data = [
  {name: 'aditya'}, {name: 'aniket'}, {name: 'swapnil'}, {name: 'chiku'}, {name: 'sakshi'}, {name: 'shital'}
];

export default function Home() {  
  return (
   <>
   <div className='container'>
    <h3>Write a react component that given a number prop nd display wether number is prime or not</h3>
    <PrimeChecker number={11}/>
    </div>
   <div className='container'>
    <h3>Write a component that receives an array of objects with name property. Render alphabetically orders lits containing only the names that start with lett 'C'</h3>
    <NameList data={data} />
    </div>
    <JsFunctions/>
    </>
  );
}
