{
    // promise

    //simulate promise
    const createPromise = ():Promise<string> => {
        return new Promise<string>((resolve, reject) => {
           const data : string = "Something"
           if(data){
            resolve(data)
           }else{
            reject("Error: Data is null")
           }
        })
    }

    // calling createPromise function
    const showData = async()=>{
        const data = await createPromise();
        console.log(data);
        return data;
    }
    showData();

    type Something = { something: string };

    // simulate
    const createPromise1 = (): Promise<Something> => {
      return new Promise<Something>((resolve, reject) => {
        const data: Something = { something: "something" };
        if (data) {
          resolve(data);
        } else {
          reject("failed to load data");
        }
      });
    };
  
    // calling create promise function
    const showData1 = async (): Promise<Something> => {
      const data1:Something = await createPromise1();
      return data1;
      // console.log(data);
    };
  
    showData1();


    //from server
    
  type Todo = {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();
    return data;
    // console.log(data);
  };

  getTodo();
}