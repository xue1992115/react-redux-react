const express = require ('express')
const Router = express.Router()
// express.Router是创建一个新的对象
Router.get('/info',function(req,res){
  return res.json({code:0})
})
module.exports = Router;