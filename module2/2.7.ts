{
    //generic constraints with keyof

    type  Vehicle = {
        bike: string;
        car: string;
        ship: string;
    } 
    type Owner = "bike" | "car" | "ship"; //manually
    type Owner2 = keyof Vehicle

    const person1: Owner2 = "bike"
    const getpropertyvalue=<X,Y extends keyof X>(obj: X, key: Y)=>{
        return obj[key]
       }
    const user = {
        name: "John",
        age: 21,
        address: "ld sd9nf "
    }
    const car = {
        year: 2022,
        model: "SUV",
        owner: "car"
       
    }

    // user.name = "John"
    // user["name"] = "John"
    // this by function
   

const result1 = getpropertyvalue(user, "name")
const result2 = getpropertyvalue(car, "year")
}