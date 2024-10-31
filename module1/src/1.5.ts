//Reference type --> Object

const user :{ 
   readonly company: 'Programming Hero'; // type literal type
    firstName: string;
    middleName?: string; //optional TYPE
    lastName: string;
    isMarried?: boolean;
} ={
    company: 'Programming Hero',
    firstName: 'John',
    middleName: 'Doe',
    lastName: 'Michael',
    isMarried: true
}

user.firstName = 'Jhankar';