const express = require('express')

const db=require('../db')
//router will be used to add routes in app server
const router = express.Router()

router.get('/emp',(req,resp)=>{
    const statement=`select * from emp`
    db.execute(statement,(err,data)=>{
        // if(err){console.log(err)}
        // else{console.log(data)
        resp.send(data)
    })
    // resp.send("list of emp")
})

router.post('/emp',(req,resp)=>{
    //destructuring req.body object
    const {ename,job,sal,deptno} = req.body
    //to take value from user as request to add in database
    const statement=`insert into emp (ename,job,sal,deptno) values('${ename}','${job}','${sal}','${deptno}')`
    db.execute(statement,(err,data)=>{
        console.log(data)
        // resp.send(data)
    })
    // resp.send("category created")
})

router.put('/emp/:empno',(req,resp)=>{
    const{ empno } = req.params
    const { ename,job,sal,deptno } = req.body
    //to take value from user as request to update in database
    const statement=`update emp set ename ='${ename}' ,job = '${job}',sal = '${sal}',deptno = '${deptno}' where empno = ${empno}`
    db.execute(statement,(err,data)=>{  
        console.log('emp updated')
        resp.send(data)
    })

    // resp.send("category updated")
})

router.delete('/emp/:empno',(req,resp)=>{
    const { empno } =req.params
    const statement = `delete from emp where empno = ${empno}`
    db.execute(statement,(req,resp)=>{
        console.log('deleted')
    })
    // resp.send("category deleted")
})

//export router having all routes related to category
module.exports = router


