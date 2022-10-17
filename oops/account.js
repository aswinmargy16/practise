class Accounts{
    min_balance=1000
    open_account(){
        console.log("your account open successfully")
    }
    deposit_ammount(){
        console.log("deposit ammount succes")
    }
    get_statement(){
        console.log("your statement is shown")
    }
    get_balance(){
        console.log("your bank balance is shown")
    }
    withdraw_account(){
        console.log("your ammount is withdraw")
    }
    close_account(){
        console.log("your account is closed")
    }
}
let a1=new Accounts();
console.log(a1);
console.log(a1.open_account);