const { spawn } = require("child_process");

const child = spawn("bash", ["-c", "npx serve ./public/ -l 1234"]);

child.stdout.on("data", (data) => {
//   console.log(`stdout: ${data}`);
  process.stdout.write(`${data}`);
});
