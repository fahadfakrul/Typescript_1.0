{
    //utility types
    // Pick type
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type Name = Pick<Person,"name" | "age">

    //omit type
    type Contactinfo = Omit<Person, "name" | "age">
    //require type
    type RequiredPerson = Required<Person>
    // Partial type
    type PartialPerson = Partial<Person>
    // Readonly type
    type ReadonlyPerson = Readonly<Person>
    const person1 : ReadonlyPerson = {
        name: 'John Doe',
        age: 25,
        email: 'john.doe@example.com',
        contactNo: '1234567890'
    }

    // person1.name = 'John Doe'

    // Record type
    // type MyObj= {
    //     a: string;
    //     b: string;
    // }

    type MyObj = Record<string, string>
    
    const EmptyObj :Record<string,unknown>={}
    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd"
    }
}