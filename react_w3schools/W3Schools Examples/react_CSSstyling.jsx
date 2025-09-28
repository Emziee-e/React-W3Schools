import { createRoot } from "react-dom/client";
import './MyStylesheet.css';

const Header = () => {
    return (
        <>
            <h1 style={{color: "red"}}>Hello Style!</h1>
            <p>Add a little style!</p>
        </>
    );
}

const Header1 = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };
    return (
        <>
            <h1 style={myStyle}>Hello Style!</h1>
            <p>Add a little style!</p>
        </>
    );
}

const Header2 = () => {
  return (
        <>
            <h1>Hello Style!</h1>
            <p>Add a little style!.</p>
        </>
    );
}

createRoot(document.getElementById('style')).render(
    <Header />
);

createRoot(document.getElementById('style1')).render(
    <Header1 />
);

createRoot(document.getElementById('style2')).render(
    <Header2 />
);