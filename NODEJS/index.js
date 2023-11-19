// const check = "mudassri shah";
// console.log(check);

const fs = require("fs");
fs.writeFileSync("read.txt", "wellcome to node js");
fs.appendFile("read.txt", "wow amazing");
