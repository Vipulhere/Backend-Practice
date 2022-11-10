const http=require('http');

//using function
// function dataControl(req,resp){
//     resp.write("<h1>Hello, This is Vipul</h1>");
//     resp.end;
// }
// http.createServer(dataControl).listen(4000);

//using arrow function
const dataControl=(req,resp)=>{
    resp.write("<h1>Hello, This is Vipul Kumar</h1>");
    resp.end;
}
http.createServer(dataControl).listen(4000);

// http.createServer((req,resp)=>{
//     resp.write("<h1>Hello this is Vipul</h1>");
//     resp.end;
// }).listen(4000);