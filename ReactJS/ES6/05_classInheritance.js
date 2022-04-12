// https://javascript.info/class-inheritance

// single inheritance.

class base {

};

class derived extends base {

}

// multiple inheritance.
// Javascript does not allow multiple inheritance.

class B1 {
    b1 = 100;
}

class B2 {
    b2 = 200;
}

// class D extends B1, B2 {    // Error.
//     d = 300;
// }