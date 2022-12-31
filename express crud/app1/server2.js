//import express
const express=require('express');

//create variable or instance of express
const mysql2= require('mysql2')

//create variable or instance of express
const app=express();

//configure the route
app.get('/product',(req,resp)=>{
    console.warn('inside route to get /product')


//connct to mysql db and openn connection

const connection=mysql2.createConnection({
    host:'0.0.0.0',
    user:'root',
    password:'root123',
    database:'suraj',
    port:3306,
})
// connection.end();
//prepare statement to excute select query
const statement='select id,title,description,price from product'

//execute query and call the callback function (arrow function)
connection.query(statement,(err,productdata)=>{
    if(err){
        console.log(err)
    }else{
        console.log(productdata)
    } 
    //if we send data directly to client then app will crash so mandotory to convvert that into json format
    const strproduct=JSON.stringify(productdata)
    resp.send(productdata);

})

})
app.listen(6000,'0.0.0.0', ()=>{
    console.warn('server started on port 6k')
})

