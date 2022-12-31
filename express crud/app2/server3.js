 const express=require('express')
const app=express()
//import mysql2 
const mysql2=require('mysql2')
// import body parser
const bodyParser=require('body-parser')

//use bodyparser's json parser to parse body from request body 
const jsonParser = bodyParser.json()
app.use(jsonParser)

app.get('/product',(req,resp)=>{
    console.log('inside route get/product')
    resp.send('resp send from express')
})

app.post('/product',(req,resp)=>{
    console.log('inside route post/product')
    console.log('body=')
    console.log(req.body)

    //destructuring  req.body object
    const { title,description,price } = req.body
    const statement=`insert into product (title,description,price) values('${title}','${description}','${price}')`
    console.log(statement)

    //connct to mysql db and openn connection

const connection=mysql2.createConnection({
    host:'0.0.0.0',
    user:'root',
    password:'root123',
    database:'suraj',
    port:3306,
})

//execute query and call the callback function (arrow function)
connection.query(statement,(err,result)=>{
    if(err){
        console.log(`err=${err}`)
    }else{
        console.log(`result = ${JSON.stringify(result)}`)
    }

    resp.send('resp send from express')   
})
})
 
app.listen(5000,'0.0.0.0',()=>{
    console.log('server statred in port 5k')
})