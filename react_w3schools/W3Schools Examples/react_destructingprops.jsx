import { createRoot } from "react-dom/client";

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

createRoot(document.getElementById('des')).render(
    <Car brand="Ford" model="Mustang" color="red" year={1969} />
);

createRoot(document.getElementById('des1')).render(
    <Car1 brand="Ford" model="Mustang" color="red" year={1969} />
);

createRoot(document.getElementById('des2')).render(
    <Car2 brand="Ford" />
);