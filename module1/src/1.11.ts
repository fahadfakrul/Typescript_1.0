{
    // ternary operator 
    const age: number = 15;

    if (age >= 18){
        console.log('Adult');
    }else{
        console.log('Minor');
    }
    const isAdult = age >= 18 ? "adult" : "not mature";
    console.log(isAdult); // Output: not mature

    // nullish coalescing operator
    const name = undefined;
    const userName = name?? "Anonymous";
    console.log(userName); // Output: Anonymous
    
    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress: string;
        }
    }

     const user: User = {
        name: "John Doe",
        address: {
            city: "New York",
            road: "123 Main St",
            presentAddress: "123 Main St",
        }
     }
    const  permanentAddress = user?.address?.permanentAddress ?? "No address";
    console.log({permanentAddress}); // Output: 123 Main St
}