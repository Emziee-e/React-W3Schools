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

function Attributes() {
    return (
        <>
            <Car />
            <Car1 />
            <Car2 />
        </>
    )
}

export default Attributes