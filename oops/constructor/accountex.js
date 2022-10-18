class account {
    acc_id;
    acc_name;
    acc_amount;
    acc_address;
    acc_phno;
    constructor(id,name,amount,address,phno){
        this.acc_id=id;
        this.acc_name=name;
        this.acc_amount=amount;
        this.acc_address=address;
        this.acc_phno=phno;
    }
    get_balance(){
        return this.acc_amount;
    }
}
let a1=new account(101,'venkey',5000,'kuppam',7330806652);
console.log(a1);
console.log(a1.get_balance());
let a2=new account(102,'thrisha',6000,'kgf',9985507317);
console.log(a2);
console.log(a2.get_balance());