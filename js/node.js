const http = require('node:http');
const mysql=require("mysql2")
let con=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"ue233103",
  database:"uiet"
})



const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    let data="";

    req.on("data",(chunk)=>{
        data+=chunk.toString()
    })
    req.on("end",()=>{
     const{username,email,password,addr,gender,options}=JSON.parse(data)
     console.log(`username=${username}`)
     const query=`INSERT INTO cse(username,email,password,addr,gender,options) VALUES ('${username}','${email}','${password}','${addr}','${gender}','${options}');`
     con.query(query,function(err,result){
      if(err) throw err;
      console.log("SUCCESSFUL")
     })
    })
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 

