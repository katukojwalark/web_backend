
class Account {
    number;
    type;
    branch;
    deposit() {console.log("Deposit")};
    withdraw() {console.log("Withdraw")};
};

let acc1 = new Account;
acc1.number = '3232';
acc1.type = 'savings';
acc1.branch = 'Manikonda';
acc1.deposit();
acc1.withdraw();

console.log("acc1: ", acc1);


// Prob stmt:  Create objects of Account from user input in an html form.
let arrAcc = [];

function onAccCreate() {
    var acc = new Account;

    acc.number = document.getElementById("accNum").value;
    acc.type = document.getElementById("accType").value;
    acc.branch = document.getElementById("accBranch").value;

    alert("acc: "+ acc);
    arrAcc.push(JSON.parse(JSON.stringify(acc)));
}

console.log(arrAcc);
