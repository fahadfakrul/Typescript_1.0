{
    // mapped types

    const arrayOfNumbers: number[] = [1, 2, 3, 4, 5];
    

// const arrayOfString: string[] = ['1', '2', '3', '4','5']

const arrayOfString: string[] = arrayOfNumbers.map(number => number.toString());
console.log(arrayOfString);


type AreaNumber = {
    height: number;
    width: number;
}

// type AreaString ={
//     height: string;
//     width: string;
// }
// but do this by  mapped types

// type AreaString = {

//     // [key in "height" | "width"]: string;
//     [key in keyof AreaNumber]: string;
// }

// const areaString: AreaString = {
//     height: '10',
//     width: '5'
// };


 // T => {height:string;width:number}
  // key => T["width"]
type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area1: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 50,
  };
}