import { createRoot } from "react-dom/client";

function Car() {
    const x = "myclass1";
    return (
        <h1 className="{x}">Hello World!!</h1>
    );
}

function Car1() {
    const myfunc = () => {
        alert('Hello World');
    };
    return (
        <button onClick={myfunc}>Click Me</button>
    );
}

function Car2() {
    const mystyles = {
        color: "red",
        fontSize: "20px",
        backgroundColor: "lightyellow"
    };

    return (
        <>
            <h1 style={mystyles}>My car</h1>
        </>
    )
}


createRoot(document.getElementById('attri')).render(
    <Car />
);

createRoot(document.getElementById('attri1')).render(
    <Car1 />
);

createRoot(document.getElementById('attri2')).render(
    <Car2 />
);