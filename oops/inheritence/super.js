class Account{
    constructor(name,email){
        this.acc_name=name;
        this.acc_email=email;
    }
}
class Saving_Account extends Account{
    constructor(id,name,email,amount,address,phno){
        super(name,email);
        this.acc_id=id;
        this.acc_amount=amount;
        this.acc_address=address;
        this.acc_phno=phno;
    }
}
let a1=new Saving_Account(101,'venkey',"venkey@14",5000,'kuppam',7330806652);
let a2=new Saving_Account(102,'thrisha','thrisha52',6000,'banglor',6301492602);
console.log(a1)
console.log(a2)