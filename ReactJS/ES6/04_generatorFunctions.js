// https://javascript.info/generators

function* foo1() {
    console.log("foo1-line1");
    console.log("foo1-line2");
    console.log("foo1-line3");
    
    yield "foo1-block-1"

    console.log("foo1-line4");
    console.log("line5");

    yield "foo1-block-2"

    console.log("foo1-line6");
    console.log("foo1-line7");
}

let iterator = foo1();

iterator.next();

console.log("yield: ", 2);

iterator.next();

// Useful in the cases of workflow where we need to follow a specific sequence of steps. Ex: swiggy food ordering.
// The execution is always top-down.
// You can programatically, mix up yields across multiple functions.

function* foo2() {
    console.log("foo2-line1");
    console.log("foo2-line2");
    console.log("foo2-line3");
    
    yield "foo2-block-1"

    console.log("foo2-line4");
    console.log("foo2-line5");

    yield "foo2-block-2"

    console.log("foo2-line6");
    console.log("foo2-line7");
}

let iterator1 = foo1();
let iterator2 = foo2();

iterator1.next();
iterator2.next();
iterator1.next();
iterator2.next();

