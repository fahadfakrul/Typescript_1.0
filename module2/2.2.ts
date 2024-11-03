{
 //
 // interface

 type User1 = {
    name: string,
    age: number
 }

 type UserWithRole1 = User1 & {role : string}
 interface UserWithRole2 extends User2 {
    role : string
 }

 const user2 : UserWithRole1 = {
    name: 'John Doe',
    age: 25,
    role: 'Admin'
 }
 console.log(user2.name)

 type rollNumber = number
interface User2 {
    name: string,
    age: number
}

 const user1 : User1 = {
    name: 'John Doe',
    age: 25
 }

 // array interface
 //in js obj is obj, array is a type of obj and function is a type of obj


type Roll1 = number[];
const rollNumber: Roll1 = [1,2,3]
// same thing can be dione by
interface Roll2 {
   [index : number]: number  
}

const rollNumber2 : Roll2 = [1,2,3]

type Add1 = (num1: number, num2: number) => number
interface Add2 {
    (num1: number, num2: number) : number
}

const add: Add1 = (num1 , num2) => num1 + num2
const add2: Add2 = (num1 , num2) => num1 + num2
 //
}