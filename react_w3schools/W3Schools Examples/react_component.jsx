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

function Component() {
  return(
    <>
      <Car />
      <Car1 color="red" />
      <Garage />
      <Car3 />
    </>
  )
}

export default Component