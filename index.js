/*
  搭建服务器
 */
// 引入数据库
require('./tools/db')
// 使用express搭建服务器
const express = require('express')
const app = express()
app.use(express.static('public'))

const userSchema = require('./models/user')

app.get('/getUserList', function(req,res){
  userSchema.find({},function(err,data){
    if (!err) {
      res.send({data:data})
      console.log(data)
    }
  })
})

app.listen(3000)
