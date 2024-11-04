{
//interface genericType
interface Developer<T, X = null> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    }
    smartWatch: T;
    bike?: X
}

type AppleWatch ={
    brand: string;
    model: string;
    releaseYear: number;
}

const juniorDeveloper: Developer<AppleWatch> = {
    name: 'Junior Developer',
    computer: {
        brand: 'Apple',
        model: 'MacBook Pro',
        releaseYear: 2021
    },
    smartWatch: {
        brand: 'Apple',
        model: 'Watch Series 7',
        releaseYear: 2021
    }
}

interface AppleWatchModel{sleeptrack: string;
    brand: string;
    model: string;}

    interface GiantBike {
        brand: string;
        model: string;
        releaseYear: number;
    }
const seniorDeveloper: Developer<AppleWatchModel, GiantBike> = {
    name: 'Senior Developer',
    computer: {
        brand: 'Apple',
        model: 'MacBook M3 Pro',
        releaseYear: 2021
    },
    smartWatch: {
        brand: 'Apple',
        model: 'Watch Series 8',
        sleeptrack: 'Apple Watch'
    },
    bike: {
        brand: 'Giant',
        model: 'Giant F-150',
        releaseYear: 2021
    }
}
}