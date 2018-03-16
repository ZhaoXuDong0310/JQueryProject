/*
  定义用户模型并向外暴露
 */
// 引入mongoose
const mongoose = require('mongoose')
// 定义Schema
const userSchema = new mongoose.Schema({
  serviceIndex: String,
  serviceType: Array,
  shopList: Array
},{
  connection:'shops'
})
// 向外暴露Schema
module.exports = mongoose.model('user', userSchema)
