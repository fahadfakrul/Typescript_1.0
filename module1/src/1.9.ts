{
    //type alias
    type Student = {
        id: number;
        name: string;
        age: number;
        grade: string;
        gender: string;
        address: string;
    };
    const student1: Student = {
        name: 'Student',
        id: 1,
        age: 18,
        grade: 'A',
        gender: 'Female',
        address: '456 Elm Street'
    };

    const student2: Student = {
        id: 2,
        grade: 'B',
        name: 'John Doe',
        age: 25,
        gender: 'Male',
        address: '123 Main Street'
    }

     console.log(student1, student2);
    type UserName = string
    type IsAdmin = boolean
    const userName: UserName = 'admin';
    const isAdmin: IsAdmin = true;

    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;
    
}