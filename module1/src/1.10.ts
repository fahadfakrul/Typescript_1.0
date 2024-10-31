{
//union types
//  type frontendDeveloper = 'fakibaz developer' | 'Junior developer'
//  type FullstackDeveloper = 'Fullstack' | 'Developer'

//  type developer = frontendDeveloper | FullstackDeveloper
//  const newDeveloper : frontendDeveloper = 'Junior developer'

//  type User ={
//    name: string;
//    email: string;
//    gender: "male" | "female";
//    bloodGroup: "O+" | "O-" | "A+" | "A-";
//  }

//  const user1 : User = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     gender: 'male',
//     bloodGroup: 'O+'
//  }


 // intersection types
 type FrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer'
 }
  type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer'
  }

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper

  const newFullstackDeveloper: FullstackDeveloper = {
    skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
  }
}