import { createRoot } from "react-dom/client";

function Football() {
    const shoot = () => {
        alert("Great Shot!")
    }
    return (
        <button onClick={shoot}>Take the shot!</button>
    );
}

function Football1() {
  const shoot1 = (a) => {
        alert(a);
  }

  return (
        <button onClick={() => shoot1("Goal!")}>Take the shot!</button>
  );
}

function Football2() {
  const shoot2 = (a, b) => {
        alert(b.type);
        /*
            'b' represents the React event that triggered the function,
            in this case the 'click' event
        */
    }

  return (
        <button onClick={(event) => shoot2("Goal!", event)}>Take the shot!</button>
  );
}

function Events() {
  return (
    <>
      <Football />
      <Football1 />
      <Football2 />
    </>
  )
}

export default Events