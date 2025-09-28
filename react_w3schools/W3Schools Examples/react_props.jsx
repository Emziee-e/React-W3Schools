import { createRoot } from "react-dom/client";

function Car(props) {
    return (
        <h2>I am a {props.brand}.</h2>
    );
}

function Car1(props) {
    return (
        <h2>I am a {props.color} {props.brand} {props.model}!.</h2>
    );
}

function Car2(props) {
  return (
    <h2>The car is from {props.year}!</h2>
  );
}

function Car3(props) {
  return (
    <>
      <h2>My {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>It is {props.carinfo.color} and it is from {props.carinfo.year}!</p>
    </>
  );
}

const carInfo = {
    name: "Ford",
    model: "Mustang",
    color: "red",
    year: 1969
};

function Car4(props) {
  return (
    <h2>I am a {props.brand}!</h2>
  );
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car4 brand="Ford" />
    </>
  );
}


createRoot(document.getElementById('props')).render(
    <Car brand="Ford" />
);

createRoot(document.getElementById('props1')).render(
    <Car1 brand="Ford" model="Mustang" color="red"/>
);

createRoot(document.getElementById('props2')).render(
  <Car2 year={1969} />
);

createRoot(document.getElementById('props3')).render(
  <Car3 carinfo={carInfo} />
);

createRoot(document.getElementById('props4')).render(
  <Garage />
);