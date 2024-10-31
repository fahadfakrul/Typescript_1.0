{
  // spread operation
  // rest operation
  //destructuring

  // spread operation
  const bros1: string[] = ["Mir", "Jhon", "Mik"];
  const bros2: string[] = ["David", "Ray", "John"];

  // bros1.push(bros2) // wrong
  bros1.push(...bros2); // right

  const mentors1 = {
    typescript: "Mezba",
    redux: "Mir",
    dbms: "Jhon",
  };

  const mentors2 = {
    javascript: "David",
    react: "Ray",
    dbms: "John",
  };

  const mentorsList = {
    ...mentors1,
    ...mentors2,
  };

  //rest operations
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends('John', 'Mary', 'Dirk', 'Linda');
}
