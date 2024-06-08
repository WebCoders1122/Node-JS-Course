const { exec } = require("child_process");
const fs = require("fs");

exec("ls -la", (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  //   console.log(`stdout: ${stdout}`);
  fs.writeFile("./doc.txt", stdout, "utf8", (err) => console.log(err));
  //   console.log(typeof stdout);
});
