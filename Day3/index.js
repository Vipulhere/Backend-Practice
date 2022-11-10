//Node js is a Async Lang -- Superfast
/*
1.Run first step
2. Run complex step(Complex data)
    --Not wait to finish the 2nd step--
3. Run third step
4.Coninue..
*/


//Let's make Api

const http =require('http');
const data =require('./Data');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application/json'});
    // resp.write(JSON.stringify({Name:'Vipul',Email:'Vipul@gmail.com'}));
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(5000); 