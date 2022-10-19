class Account{
min_bal=5000;
get_account_details(){
    console.log("account details shown")
}
}
class Saving_Account extends Account{
deposit_ammount(amount){
    console.log(this.min_bal + amount)
}
}
let a1=new Saving_Account();
a1.get_account_details();
console.log(a1.min_bal);
a1.deposit_ammount(500);

class Current_Account extends Account{
min_bal=10000;
deposit_ammount(amount){
    console.log(this.min_bal + amount)
}
}
let a2=new Current_Account();
a2.get_account_details();
console.log(a2.min_bal);
a2.deposit_ammount(100);