// event loop == a loop which stores "async function" or 'callbacks' and execute them in specific order after execution of sync functions
const fs = require("fs");
(function lib() {
  function first() {
    setTimeout(() => {
      //timer will always execute after sync functions
      console.log("timer");
    }, 0);
    second();
    console.log("first");
  }
  function second() {
    setImmediate(() => console.log("immediate")); // it may be execute before timer when some input / output is on the way
    third();
    console.log("second");
  }
  function third() {
    console.log("third");

    process.nextTick(() => console.log("tick")); // this will always execute right after sync function and before event loop
  }
  //   first(); // in this call timer will execute before immediate
  fs.readFile("./doc.txt", first); // in this immediate will execute before timer
})();
