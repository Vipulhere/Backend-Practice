const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'Files');
// console.log(dirPath);

//making file
/*
for(i=0;i<5;i++){
    // fs.writeFileSync("hello"+i+".txt","Simple text file")
    fs.writeFileSync(dirPath+`/hello${i}.txt`,"Simple text file")
}
*/
// fs.writeFileSync('Apple.txt','Some text added') // one file

//reading File
fs.readdir(dirPath,(err,Files)=>{
    // console.warn(Files); // gave in an array
    Files.forEach((items)=>{
        console.warn("File name is ",items);
    })
})