const str = "Hello World!";
const arr = str.lastIndexOf(" ") !== -1 ? str.split(" ") : [str];
console.log(arr); // Output: ["Hello", "World!"]
