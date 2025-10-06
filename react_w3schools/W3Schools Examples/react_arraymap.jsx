const fruitlist = ['apple', 'banana', 'cherry'];

function MyList() {
    return (
        <ul>
            {fruitlist.map(fruit => <li key={fruit}>{fruit}</li>)}
        </ul>
    );
}
const users = [
    { id: 1, name: 'John', age: 30},
    { id: 2, name: 'Jane', age: 25},
    { id: 3, name: 'Bob', age: 35},
];

function UserList() {
    return (
        <ul>
            {users.map(user =>
                <li key={user.id}>
                    {user.name} is {user.age} years old
                </li>
            )}
        </ul>
    );
}

function ArrayMap() {
    return (
        <>
            <MyList />
            <UserList />
        </>
    )
}

export default ArrayMap