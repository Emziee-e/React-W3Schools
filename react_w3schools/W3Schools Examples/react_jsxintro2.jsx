const myElement2 = <h1 className="myclass">Hello World</h1>;

function Car() {
  return (
    <>
      <h2>My Car</h2>
      <p>It is a Ford Mustang.</p>
    </>
  );
}

function JSXIntro2() {
  return (
    <>
      {myElement2}
      <Car />
    </>
  )
}

export default JSXIntro2