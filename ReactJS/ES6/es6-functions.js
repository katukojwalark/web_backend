/**********  Arrow functions  **********/

let userName = "Rajanikanth";
let password = "12345";

function authenticateFoo(user, pwd) {
    return (user===userName && pwd===password) ? "success" : "failure";
}

console.log(authenticateFoo("Rajanikanth", "12345"))

// Equivalent with Arrow function. return is not required. Arrow functions by default add return for single stmt functions.

let authenticateArrow = (user, pwd) => user===userName && pwd===password ? "success" : "failure";

console.log(authenticateArrow("Rajanikanth", "12345"))

let square = n => n*n;

console.log(square(10));

// this object and arrow functions: https://www.codementor.io/@dariogarciamoya/understanding-this-in-javascript-with-arrow-functions-gcpjwfyuc


/**********  caller need not match the argument list. Just the function name is enough  **********/
function foo(a, b, c) {
    console.log("a, b, c: ", a, b, c);
}

foo(1, 2, 3);
foo();  // this still succeeds. name is enough.

/**********  Default parameters  **********/
function fooDef1(a, b=10, c) {
    console.log("a, b, c: ", a, b, c);
}
fooDef1();

function fooDef2(a=10, b=20, c=30) {
    console.log("a, b, c: ", a, b, c);
}
fooDef2(1);

/* 
    Problem statement: Create a login form that takes username, password and validates them.
    If the user is not providing any input, consider it as a guest user where guest user credentials are some default values.
    Use arrow function.
*/

// Following is object constructor function, prior to ES6.
// Once classes which are part of ES6 are introduced, we can use them.
function User(nm, pw) {
    this.userName = nm;
    this.password = pw; 
};
let guestUser = new User("guest", "guestPw");
let stdUser = new User("rkat", "pwd@123");
let invalidUser = new User("invalid", "invalid");

function onUserLogin() {
    let userName = document.getElementById("_username").value;
    let userPwd = document.getElementById("_password").value;

    authLogin((userName.length==0 && userPwd.length==0) ? guestUser : (userName==stdUser.userName && userPwd==stdUser.password) ? stdUser : invalidUser);
};

let loginUser = (usr) => usr==invalidUser ? alert("Invalid Credentials"): alert("Welcome " + usr.userName + '!');

let authLogin = (usr) => loginUser(usr)
