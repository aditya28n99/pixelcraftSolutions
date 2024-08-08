import React from 'react'

export default function Arrays() {

    const Numbers = [1, 3, 7, 4, 2, 11, 14, 17, 20, 5, 6, 8, 10, 9, 12, 13, 15, 16, 18, 19];
    const Names = ['aditya', 'ankita', 'anurag', 'vish', 'saurabh', 'nilesh'];
    const MixedArray = [22, 'shital', { day: 'Thursday' }, [25]];

    console.log("forEach loop started");
    Numbers.forEach((num) => {
        if (num === 20) {
            console.log("num is 20");
        }
    });

    console.log(`The length of numbers arrya is: ${Numbers.length}`)

    return (
        <>
            <div className='container'>
                <h4>Array Methods</h4>
            </div>

        </>)
}
