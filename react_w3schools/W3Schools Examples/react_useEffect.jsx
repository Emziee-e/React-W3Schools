import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    });

    return <h1>I've rendered {count} times!</h1>;
}

function Timer1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []); // <- add empty brackets here

    return <h1>I've rendered {count} times!</h1>;
}

function UseEffect() {
    return (
        <>
            <Timer />
            <Timer1 />
        </>
    )
}

export default UseEffect