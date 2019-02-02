import React from 'react'
import { WingBlank, WhiteSpace, Button, List, InputItem} from 'antd-mobile'
import Logo from '../../components/logo/logo'

class Login extends React.Component{
  constructor(props){
    super(props);
    this.register = this.register.bind(this);  
  }
  register = ()=>{
    // 路由组件包含 this.props.history属性
    this.props.history.push('./register');
    // console.log(this.props,'this.props')
  }
  render(){
    return (
    <div>
      <Logo />
      <h2>登录页面</h2>
      <WingBlank>
        <List>
          <InputItem>用户</InputItem>
          <WhiteSpace />
          <InputItem>密码</InputItem>
        </List>
        <WhiteSpace />
        <Button type="primary">登录</Button>
        <WhiteSpace />
        <Button type="primary" onClick={this.register} value="注册">注册</Button>
      </WingBlank> 
    </div>
    )
  }
}
export default Login