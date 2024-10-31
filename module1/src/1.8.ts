// destructuring
const newUser = {
    id:345,
    name: {
        firstName: 'John',
        middleName: 'Betty',
        lastName: 'Doe'
    },
    age: 30,
    address: "Uganda"
}

const {address, name: { middleName : midName}} = newUser; // here type cannot be declares as name aliases

// array destructuring
const myFriends = ["Chandler", "Joey", "Ross", "Rachel"]

//const [a, b, c,...f]= myFriends
const [a, b, c,...f]= myFriends

