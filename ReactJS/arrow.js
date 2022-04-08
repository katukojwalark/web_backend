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
