import { createRoot } from 'react-dom/client'

const myElement2 = <h1 className="myclass">Hello World</h1>;

function Car() {
  return (
    <>
      <h2>My Car</h2>
      <p>It is a Ford Mustang.</p>
    </>
  );
}

createRoot(document.getElementById('intro2')).render(
    myElement2
);

createRoot(document.getElementById('compo')).render(
  <Car />
);
