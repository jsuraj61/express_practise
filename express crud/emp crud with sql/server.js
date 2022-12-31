const express=require('express')

//parsing req.body object into json
const bodyparser=require('body-parser')

const app=express();
//routers
const routeremp=require('./routes/emp')

app.use(bodyparser.json())

//midddleware 
app.use(routeremp)




app.listen(3000,'0.0.0.0',()=>{
    console.log('server started at port 3k')
})