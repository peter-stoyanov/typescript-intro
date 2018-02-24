// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;

// Declare a tuple type
let tupl: [string, number];
// Initialize it
tupl = ["hello", 10]; // OK
// Initialize it incorrectly
tupl = [10, "hello"]; // Error