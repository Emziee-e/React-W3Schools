function Greeting({ name, age }) {
  return <h1>Hello, {name}! You are {age} years old.</h1>;
}
  
function Destruct() {
  return (
    <>
      <Greeting name="John" age={25} />
    </>
  )
}

export default Destruct

