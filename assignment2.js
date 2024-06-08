const arguments = process.argv;

const sum = (a, b) => {
  console.log(+a + +b);
};

sum(arguments[2], arguments[6]);
