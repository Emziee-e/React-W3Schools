import { createRoot } from "react-dom/client";

function MyCars() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>My Cars:</h1>
            <ul>
                {cars.map((car) => <li>I am a { car }</li>)}
            </ul>
        </>
    );
}

function MyCars1() {
    const cars1 = [
        {id: 1001, brand: 'Ford'},
        {id: 1002, brand: 'BMW'},
        {id: 1003, brand: 'Audi'}
    ];
    return (
        <>
            <h1>My Cars:</h1>
            <ul>
                {cars1.map((car) => <li key={car.id}>I am a { car.brand }</li>)}
            </ul>
        </>
    );
}

function List() {
    return (
        <>
            <MyCars />
            <MyCars1 />
        </>
    )
}

export default List