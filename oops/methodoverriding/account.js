class Account{
    get_account_details(){
        console.log("account class-get account_default method")
    }
}
class Saving_Account extends Account{
    get_account_details(){
        console.log("saving account-class get account_details method")
    }
}
let a1=new Saving_Account()
a1.get_account_details()