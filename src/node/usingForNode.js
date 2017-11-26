
var em_module = require('./forNode.js');

em_module._sayHi(); // direct calling works
em_module.ccall("sayHi"); // using ccall etc. also work
console.log(em_module._daysInWeek()); // values can be returned, etc.

setTimeout(() => {
    console.log("Except it is not ... wasm");
}, 5000);