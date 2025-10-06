import { createRoot } from "react-dom/client";

function MissedGoal() {
    return <h1>MISSED!</h1>
}

function MadeGoal() {
    return <h1>Goal!</h1>
}

function Goal(props) {
    const isGoal = props.isGoal;
    if (isGoal) {
        return <MadeGoal/>
    }
    return <MissedGoal/>
}

function Car(props) {
    return (
        <>
            {props.brand && <h1>My car is a {props.brand}</h1>}
        </>
  );
}

function MissedGoal1() {
    return <h1>MISSED!</h1>
}

function MadeGoal1() {
    return <h1>Goal!</h1>
}

function Goal1(props) {
    const isGoal1 = props.isGoal;
    return (
        <>
            {isGoal1 ? <MadeGoal1/> : <MissedGoal1/> }
        </>
    );
}

function Rendering() {
    return (
        <>
            <Goal isGoal={false} />
            <Car brand="Ford" />
            <Goal1 isGoal={false} />
        </>
    )
}

export default Rendering