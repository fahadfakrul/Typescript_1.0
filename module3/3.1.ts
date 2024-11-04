{
  //oop- class
  class Animal {
    // public name: string;
    // public species: string;
    // public sound: string;

     //parameter properties

    constructor(public name: string, public species: string, public sound: string) {
    //   this.name = name;
    //   this.species = species;
    //   this.sound = sound;
    }

    makeSound(): void {
      console.log(`${this.name} makes ${this.sound}`);
    }
  }

  const dog = new Animal("Germond", "Dog", "Woof Woof");
  const cat = new Animal("Animal", "Cat", "Meow");
  cat.makeSound();
}
