import { useState, useRef, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

  useEffect(() => {
        count.current = count.current + 1;
    });

  return (
        <>
            <p>Type in the input field:</p>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </>
    );
}

function App1() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
        />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}

createRoot(document.getElementById('useref')).render(
    <App />
);

createRoot(document.getElementById('useref1')).render(
    <App1 />
);
