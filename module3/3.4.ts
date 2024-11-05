{
    //instance of guard 
    class Animal {
        name: string;
        species: string;
        constructor(name: string , species: string){
            this.name = name;
            this.species = species;
        }

        makeSound(){
            console.log(`${this.name} makes a sound.`);
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string){
            super(name, species);
        }
        makeBark () {
            console.log(`${this.name} barks.`);
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string){
            super(name, species);
        }
        makeMeow () {
            console.log(`${this.name} meows.`);
        }
    }

     //for smarter way 
     const isDog = (animal:Animal) :animal is Dog =>{
        return animal instanceof Dog;
     }

     const isCat = (animal:Animal): animal is Cat=>{
        return animal instanceof Cat;
     }

    const getAnimal = (animal: Animal) =>{
        if(isDog(animal)){
            animal.makeBark();
        }else if(isCat(animal)){
            animal.makeMeow();
        }else{
            animal.makeSound();
        }
    }
    // const getAnimal = (animal: Animal) =>{
    //     if(animal instanceof Dog){
    //         animal.makeBark();
    //     }else if(animal instanceof Cat){
    //         animal.makeMeow();
    //     }else{
    //         animal.makeSound();
    //     }
    // }
    const dog = new Dog("Dog bhai","Dog");
    const cat = new Cat("Cat bhai","Cat");

    getAnimal(cat)
}