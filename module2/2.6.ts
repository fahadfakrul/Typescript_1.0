{
    //constraints
    const addCourseToStudent = <T extends{id: number; name: string; mail: string}>(student: T) => {
        const course = "Next level web development course";
    
        return {
          ...addCourseToStudent,
          course,
        };
      };
    
    //   const student3 = addCourseToStudent({
    //     bang:'emni'
    //   }) no name mail and id
    
      const student1 = addCourseToStudent({
        id: 1,
        name: "John Doe",
        mail: "john@gmail.com",
      });
      const student2 = addCourseToStudent({
        id: 2,
        name: "Jane Doe",
        mail: "jane@gmail.com",
        hasWatch: false,
      });
}