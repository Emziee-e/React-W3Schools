import { useState } from 'react';
import { createRoot } from 'react-dom/client';

function FavoriteColor() {
    const [color, setColor] = useState("red");

    return <h1>My favorite color is {color}!</h1>
}

function FavoriteColor1() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
    </>
  )
}

function UseState() {
  return (
    <>
      <FavoriteColor />
      <FavoriteColor1 />
    </>
  )
}

export default UseState