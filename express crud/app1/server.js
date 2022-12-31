//using with postman
//import express
const express=require('express');

//create variable or instance of express
const app=express();

//route
app.get('/product',(req,resp)=>{
    console.log('inside route for get /product')
    resp.send('response sent from express1');
});

app.put('/product',(req,resp)=>{
    console.log('inside route for put /product')
    resp.send('response sent from express');
});

app.post('/product',(req,resp)=>{
    console.log('inside route for post /product')
    resp.send('response sent from express2');
});
app.delete('/product',(req,resp)=>{
    console.log('inside route for delete /product')
    resp.send('response sent from express');
});

 //start application 
 app.listen(4000,'0.0.0.0',() =>{
     console.log("app start on port 3000")
 })
