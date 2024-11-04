{
//
//generic types
type GenericArray<T> = Array<T>
// const rollNumbers : number[] = [3,6,8]
const rollNumbers : Array<number> = [3,6,8]

// const mentors : string[] = ["A", "B", "C", "D", "E", "F"]
const mentors : GenericArray<string> = ["A", "B", "C", "D", "E", "F"]

// const boolArray: boolean[] = [true, false, false, false, false]
const boolArray: GenericArray<boolean> = [true, false, false, false, false]

interface User {
    name: string;
    age: number;
}

const user : GenericArray<{name: string; age: number}> = [
    {
        name: 'John Doe',
        age: 25,
        
    },
    {
        name: 'Jane Doe',
        age: 30,
       
    }
]


// generic tuple function
type GenericTuple<X,Y> = [X,Y]
const manush : GenericTuple<string, string> = ["John", "Jane"]

const UserWithId : GenericTuple<number,{name:string, email: string}> = [1234, {name: 'Fred', email: 'fred@example.com'}]
const add = (x: number, y: number) => x + y;

add(30 , 290)
//
}