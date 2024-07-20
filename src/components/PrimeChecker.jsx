import React from "react";

const PrimeChecker = ({ number }) => {
    const isPrime = (num) => {
        if (num <= 1) return false;
        if (num === 2) return true; // 2 is the only even prime number
        if (num % 2 === 0) return false; // other even numbers are not prime
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const message = isPrime(number)
        ? `${number} is a prime number`
        : `${number} is not a prime number`;

    return (
        <>
            <h4>{message}</h4>
        </>
    );
};

export default PrimeChecker;
