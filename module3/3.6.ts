{
    // access modifiers 
    class BankAccount{
      public readonly id : number;
      public  name: string;
      protected  _balance: number;
    //   private  _balance: number;
    
        constructor(id : number, name : string, _balance : number){
            this.id = id;
            this.name = name;
            this._balance = _balance;
        }

        // public addDeposit(amount: number){
        //     this._balance += amount;
        // }
         // getter
         get Balance(){
            return this._balance;
         }

         //setter
         set Deposit(amount: number){
            this._balance += amount;
         }
        // public getBalance(){
        //     return this._balance;
        // }
    }

    class studentAccount extends BankAccount {
        test(){
           this._balance =  0;
        }
    }

    const goribManusherAccount = new BankAccount(111, 'Aloo', 5000)
    // // goribManusherAccount.balance = 5000
    // goribManusherAccount.addDeposit(500)
    goribManusherAccount.Deposit = 50;
    const myBalance = goribManusherAccount.Balance;
    console.log('My balance is', myBalance);
    
}