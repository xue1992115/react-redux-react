const express = require('express');
const mongoose = require('mongoose');
const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
  console.log('mongo connect success');
})
// 类似于mysql的表，mongo中有文档和字段的概念
const User = mongoose.model('user', new mongoose.Schema({
  username: {type: String, require: true},
  age: {type: Number, require: true}
}))
// 新增数据 删除数据
User.create({
  user: 'imooc',
  age: 18,
}, function(err, doc){
  if(!err){
    console.log(doc);
  } else {
    console.log(err);
  }
})
const userRouter = require('./user')
const app = express()
// 开启一个中间件，当一个请求来的时候，会依次被这些中间件处理;
app.use('/user',userRouter)
//新建app
// 返回字符串格式的数据
app.get('/', function (req, res) {
  res.send('你好全世界')
})
// 返回json格式的数据
app.get('/data', function(req, res) {
  res.json({name: 'imooc', type: 'IT'})
})
// 监听的端口是9093
app.listen(9093, function () {
  console.log('Node app start at port 9093')
})
/** 
 * 其他特性：
 * app.get
 * app.post
 * app.use
*/