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

function CSSstyle() {
    return (
        <>
            <Header />
            <Header1 />
            <Header2 />
        </>
    )
}
 
export default CSSstyle