import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login, getUserData } from './Auth.redux.js'
import axios from 'axios'
// 利用connect注入的方式，将state绑定在props上
@connect(state=>state.auth,{login, getUserData}) 
class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      data:{}
    }
  }
  componentDidMount(){
    this.props.getUserData()
    // axios.get('./data')
    // .then(res=>{
    //   if(res.status === 200){
    //     this.setState({
    //       data:res.data[12]
    //     })
    //   }
    // })
  }
  render() {
    
    return (
      <div>
        <h2>我的名字是{this.props.user},我的年龄是{this.props.age}</h2>
        { this.props.isAuth ? <Redirect to='/dashboard' /> : null }
        <h2>你没有权限,需要登录号才能看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}
export default Auth
