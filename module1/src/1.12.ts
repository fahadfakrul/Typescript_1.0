{
    //nullable type
    const searchName = (value: string | null) => {
        if (value){
            console.log(`Searching for ${value}`);
        }else{
            console.log('Search value is null');
        }
    }
    searchName("Bambi")
    searchName(null)

    //unknown type
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if (typeof value === 'number'){
            console.log(`Speed in meters per second is ${(value * 1000)/3600}`);
        } 
        if(typeof value === 'string'){
            // const valueInNumber = value.split(' ');
            const [result,unit] = value.split(' ');
            // console.log(`Speed in meters per second is ${(Number(valueInNumber[0]) * 1000)/3600}`);
            console.log(`Speed in meters per second is ${(parseFloat(result) * 1000)/3600} when the unit is ${unit}`);
        }else{
            console.log('Invalid input');
        }
    }
    getSpeedInMeterPerSecond('1000 kmh') //
    getSpeedInMeterPerSecond(null) //

    //never
    const throwError = (msg: string): never => {
        throw new Error(msg);
    }
  throwError("Error occured");
}