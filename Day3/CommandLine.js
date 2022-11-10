// console.log(process);
// console.log(process.argv); //argument Vector --2 file dia 1.jaha save hai wo 2.jaha se run kia wo 


// console.log(process.argv[2]);

const fs=require('fs');
const input= process.argv;

// fs.writeFileSync(input[2],input[3]);
//remove+add
if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4]);
}else if(input[2]=='remove'){
    fs.unlinkSync(input[3])
}else{
    console.log("Invalid Input");
}

/*
node CommandLine.js hi
node CommandLine.js hello
node CommandLine.js add About.txt 'hola'
node CommandLine.js remove About.txt 'hola'
node CommandLine.js  About.txt 'hola' // not in loop
*/