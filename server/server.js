const express = require('express');
const mongoose = require('mongoose');
//新建app
const app = express()
app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})
//链接mongo 
const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function () {
  console.log('mongo conect success')
})

//类似与mysql的表，mongo中有文档和字段的意思
const User = mongoose.model('user', new mongoose.Schema({
  user: { type: String, require: true },
  age: { type: Number, require: true }
}))

//Mongoose中的文档模型
/** 
 * String Number等数据结构
 * 用creat、remove、update分别用来增、删、改
 * find、findOne用来查询数据
 * 
*/
//新建一条数据
// User.create({
//   name: 'xiaominghhhhhhh',
//   age: 18
// }, function (err, doc) {
//   if (!err) {
//     console.log(doc);
//   } else {
//     console.log(err);
//   }
// })
//get post分别开发get接口和post接口
app.get('/data', function (req, res) {
  User.find({}, function (err, doc) {
    res.json(doc);
  })
})
app.listen(9093, function () {
  console.log('Node app start at port 9093')
})