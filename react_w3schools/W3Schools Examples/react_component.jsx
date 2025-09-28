import { createRoot } from "react-dom/client";
import Car3 from './vehicle.jsx';

function Car() {
    return (
        <h2>Hi, I am a Car!</h2>
    );
}

function Car1(props) {
    return (
        <h2>I am a {props.color} Car!</h2>
    );
}

function Car2() {
  return (
    <h2>I am a Car!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car2 />
    </>
  );
}

createRoot(document.getElementById('compo1')).render(
    <Car />
);

createRoot(document.getElementById('compo2')).render(
    <Car1 color="red"/>
);

createRoot(document.getElementById('compo3')).render(
    <Garage />
);

createRoot(document.getElementById('compo4')).render(
  <Car3 />
);