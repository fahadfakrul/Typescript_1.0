{
    //static

    class Counter {
        // count: number=0;
        static count: number=0;
        static increment() {
        //    return this.count++;
        return Counter.count++;
        }
        static decrement() {
            // return this.count--;
            return Counter.count--;
        }
    }

    // const instance1 = new Counter()
    console.log(Counter.increment())
    console.log(Counter.increment())
    console.log(Counter.increment())
    const instance2 = new Counter()
    console.log(Counter.increment())
    console.log(Counter.increment())
    console.log(Counter.decrement())
}