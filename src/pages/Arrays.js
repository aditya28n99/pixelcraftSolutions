import React from 'react'

export default function Arrays() {

    const Numbers = [1, 3, 7, 4, 2, 11, 14, 17, 20, 5, 6, 8, 10, 9, 12, 13, 15, 16, 18, 19];
    const Names = ['aditya', 'ankita', 'anurag', 'vish', 'saurabh', 'nilesh'];
    const MixedArray = [22, 'shital', { day: 'Thursday' }, [25]];

    let arr = [1,2,3,4,5]
    //length
    console.log(`Lenght is: ${Numbers.length}`);

    // creating a arry of specific length
    const fixdArray = new Array(5);
    console.log('length of this fixed arrya is: ',fixdArray.length);

    //Array.From()
    const newFromArray = Array.from(MixedArray[1]);
    console.log(newFromArray);

    //push() - Adds an element to the end of an array

    console.log('This is the original arry before push', arr);
    function addElement(arr){
        for(let i = 0; i<5; i++){
            arr.push(arr[i]+2);
        }
        return arr;
    }
    console.log('This is the pushed arry',addElement(arr));
    
    //pop() - Removes the last element from an array

    console.log('This is the original arry before pop', arr);

    function removeElement(arr){
        for(let i=0; i<5; i++){
            arr.pop();
        }
        return arr;
    }
    console.log('This is the popped arry', removeElement(arr));

    // original arry get modified.

    
    return (
        <>
            <div className='container'>
                <h4>Array Methods</h4>
                <h5>Common Methods to create and initialize arryas</h5>
                <p>Array Literals: [element1, element2, ...]</p>
                <p>Array Constructor: new Array(length) or new Array(element1, element2, ...)
                </p>
                <p>Array.of(): Array.of(element1, element2, ...)</p>
                <p>The Array.of() method creates a new Array instance with a variable number of arguments, regardless of the number of arguments or their types.</p>
                <p>Array.from(): Array.from(arrayLikeObject, mapFunction)
                </p>
                <p>The Array.from() method creates a new array instance from an array-like or iterable object.</p>
                <p>Default Values with fill(): new Array(length).fill(value)
                </p>
                <p>Initializing with map(): Array.from
                </p>
                <p>Spread Syntax: [...existingArray, element]
                </p>

                <strong>Array Methods</strong>
                <p>.1  Push() - Adds an element to the end of an array</p>
                <p>.2  pop() - Removes the last element from an array</p>
            </div>

        </>)
}
