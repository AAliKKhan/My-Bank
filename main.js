#! /usr/bin/env node
// Class
class Bankaccount {
    accountbalance;
    constructor(accountbalance) {
        this.accountbalance = accountbalance;
    }
    //publically credit
    credit(amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("credit sucessfully get into new account and your balance is :" + this.accountbalance);
        }
        else {
            console.log("credit unsucessfull");
        }
    }
    // publically debit
    debit(amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("debit successfully share in new account balance: " + this.accountbalance);
        }
        else {
            console.log("debit unsucessfully");
        }
    }
}
//customer details
class customer {
    person;
    age;
    gender;
    mobile_number;
    bankaccount;
    constructor(person, age, gender, mobile_number, bankaccount) {
        //this property utalization
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    //publically user acess
    display() {
        console.log("Name: " + this.person.firstname + " " + this.person.lastname);
        console.log("Age:" + this.age);
        console.log("Gender:" + this.gender);
        console.log("Mobile Number:" + this.mobile_number);
        console.log("Amount in Bank:" + this.bankaccount.accountbalance);
        console.log("");
    }
}
const Acc1 = new Bankaccount(3400);
const a = new customer({ firstname: "Ali", lastname: "Adnan" }, 16, "Male", 657343455667, Acc1);
a.display();
a.bankaccount.debit(3500);
console.log();
const Acc2 = new Bankaccount(1000);
const b = new customer({ firstname: "Asim", lastname: "Kaha" }, 52, "Male", 6755467843, Acc2);
b.display();
b.bankaccount.debit(900);
console.log();
const Acc3 = new Bankaccount(70000);
const c = new customer({ firstname: "Rashida", lastname: "Begum" }, 46, "Female", 768567867843, Acc3);
c.display();
c.bankaccount.debit(50000);
console.log();
export {};
