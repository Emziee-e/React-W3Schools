import { createRoot } from "react-dom/client";
import { useState } from "react";

function MyForm() {
    return (
        <form>
            <label> Enter your name:
                <input type="text" />
            </label>
        </form>
    )
}

function MyForm1() {
    const [name, setName] = useState("");

    return (
        <form>
        <label>Enter your name:
            <input
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </label>
        <p>Current value: {name}</p>
        </form>
    )
}

createRoot(document.getElementById('forms')).render(
    <MyForm />
);

createRoot(document.getElementById('forms1')).render(
    <MyForm1 />
);