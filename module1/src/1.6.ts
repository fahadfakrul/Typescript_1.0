// function
// Normal function
// Arrow function

function add(num1: number, num2: number = 10):number{
    return num1 + num2;
}

add(2,2)

const addArrow = (num1: number, num2: number): number => num1 + num2;

addArrow(3,3)

// Method --> in object function

const poorUser ={
    name: 'John',
    balance: 0,
    addBalance(balance: number): number{
        return this.balance + balance;
    }
}
const poorNewUser ={
    name: 'John',
    balance: 0,
    addBalance(balance: number): string{
        return `My new balance is ${this.balance + balance}`;
    }
}

const arr : number[]= [1,2,10]

const newArray: number[] = arr.map((elem: number) => elem * elem)