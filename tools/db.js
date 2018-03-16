/*
  连接数据库
 */
// 引入mongoose
const mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://localhost:27017/daoway')
// 开启数据库
mongoose.connection.on('open',function(){
  console.log('数据库连接成功')
})