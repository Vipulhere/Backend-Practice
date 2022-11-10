const app =require("./app");
console.log(app);
console.log(app.x);
console.log(app.y);
console.log(app.z());
console.log("Hello");
console.warn("Hello Vipul");


const fs=require('fs');
fs.writeFileSync("text.txt","this is something written in text file");
console.log("---->",__dirname);
console.log("---->",__filename);

let os=require('fs').writeFileSync;
os("hello.txt","more text here");