const mysql2=require('mysql2')
const pool=mysql2.createPool({
  host: '0.0.0.0',
  user: 'root',
  password:'root123',
  port:'3306',
  database: 'test',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
})

module.exports=pool