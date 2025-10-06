import { createRoot } from 'react-dom/client';
import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => (
        <input ref={ref} {...props} />
    ));

function App() {
    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <MyInput ref={inputRef} placeholder="Type here..." />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}

function ForwardRef() {
    return (
        <>
            <App />
        </>
    )
}

export default ForwardRef