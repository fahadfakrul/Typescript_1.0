{
  //function with generics

  const createArray = (param: string): string[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res2 = createArrayWithGeneric<string>("Bangladesh");
  type User = { id: number; name: string };
  const resObject = createArrayWithGeneric<User>({
    id: 222,
    name: "Bangladesh",
  });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res5 = createArrayWithTuple<string, number>("Bangladesh", 222);
  const res11 = createArrayWithTuple<string, { name: string }>("Bangladesh", {
    name: "asia",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next level web development course";

    return {
      ...addCourseToStudent,
      course,
    };
  };

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
