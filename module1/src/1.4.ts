//Basic data types
//string 

let firstName : string = 'Fahad'  //explicit type define
//number
let roll: number = 123
//boolean 
let isAdmin : boolean = true
//undefined
let x: undefined = undefined

//null
let y: null = null

let d; //infer data type any

d = 10;
d = 'Math'
d= true

//array

let mixedArray: (string | number | boolean)[] = ['one', 2, true]
let numbers: number[] = [1, 2, 3, 4, 5]
let strings: string[] = ['one', 'two', 'three']
let bools: boolean[] = [true, false, true]

//tuple --> array --> order --> type of values 

    let person: [string, number, boolean] = ['John', 25, true]
    console.log(person[0])  // John
    