{
     //conditional type
      type a1 = number
      type b1 = undefined
      type x = a1 extends null ? true : false
      type y = b1 extends null? true : b1 extends undefined ? undefined : any;

      type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
      }

      // keyof shereikh

    //   type CheckVehicle<T> = T extends "bikes" | "car" | "ship" ? true : false;
      type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

      type HasBike = CheckVehicle<"ship">  // true
      type HasTractor = CheckVehicle<"Tractor">  // false
      type HasPlane = CheckVehicle<"plane">  // true
}