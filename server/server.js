const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./user')
const app = express()
// 开启一个中间件，当一个请求来的时候，会依次被这些中间件处理;
app.use('/user',userRouter)
//新建app

app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})

app.listen(9093, function () {
  console.log('Node app start at port 9093')
})