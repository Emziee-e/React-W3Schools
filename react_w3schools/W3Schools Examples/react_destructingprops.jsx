function Car({color}) {
    return (
        <h2>My car is {color}!</h2>
    );
}

function Car1({color, brand, ...rest}) {
  return (
    <h2>My {brand} {rest.model} is {color}!</h2>
  );
}

function Car2({color = "blue", brand}) {
  return (
    <h2>My {color} {brand}!</h2>
  );
}

function Props() {
  return (
    <>
      <Car brand="Ford" model="Mustang" color="red" year={1969} />
      <Car1 brand="Ford" model="Mustang" color="red" year={1969} />
      <Car2 brand="Ford" />
    </>
  )
}

export default Props