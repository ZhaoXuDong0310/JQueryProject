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
const serviceSchema = require('./models/service')
const itemsSchema = require('./models/items')
const commentsSchema = require('./models/comments')

app.get('/getUserList', function(req,res){
  userSchema.find({},function(err,data){
    if (!err) {
      res.send({data:data})
      console.log(data)
    }
  })
})

app.get('/getServiceList', function(req,res){
  serviceSchema.find({},function(err,data){
    if (!err) {
      res.send({data:data})
      console.log(data)
    }
  })
})

app.get('/getItemsList', function(req,res){
  itemsSchema.find({},function(err,data){
    if (!err) {
      res.send({data:data})
      console.log(data)
    }
  })
})

app.get('/getComments', function(req, res){
  // commentsSchema.find({}, function(err, data){
  //   if (!err) {
  //     res.send({data:data})
  //     console.log(data)
  //   }
  // })
  // 获取请求中的page
  const page = req.query.page
  // 设置分页公式 - 一页显示多少数据
  commentsSchema.find().limit(10).skip((page-1)*10).exec(function(err, data){
    if (!err) {
      res.send({data: data})
    }
  })
})

app.listen(3000)
