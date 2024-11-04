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

type AreaString ={
    height: string;
    width: string;
}
// but do this by  mappped typers
}