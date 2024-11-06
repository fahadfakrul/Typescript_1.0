{
  //abstraction
  // 2 types 1. Interface 2. Abstract

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  class Car1 implements Vehicle1 {
    startEngine(): void {
      console.log("Start engine");
    }
    stopEngine(): void {
      console.log("Stop engine");
    }
    move(): void {
      console.log("Car is moving");
    }
    test(): void {
      console.log("Car specific method");
    }
  }

  const toyotaCar = new Car1();
  toyotaCar.startEngine();

  //abstract class

  abstract class Car2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test(): void {
        console.log("Honda specific method");
      }
  }

  class HondaCar extends Car2 {
    startEngine(): void {
        console.log("Start engine");
      }
      stopEngine(): void {
        console.log("Stop engine");
      }
      move(): void {
        console.log("Car is moving");
      }
    test(): void {
      console.log("Honda specific method");
    }
  }
  //usage
  const hondaCar = new HondaCar();
  hondaCar.startEngine();
}
