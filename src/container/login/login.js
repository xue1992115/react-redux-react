import React from 'react'
import { WingBlank, WhiteSpace, Button, List, InputItem, Flex} from 'antd-mobile'
import Logo from '../../components/logo/logo'

class Login extends React.Component{
  constructor(props){
    super(props);
    /** 绑定this */
    this.register = this.register.bind(this);  
  }
  register = ()=>{
    // react-router-dom路由组件包含history属性
    this.props.history.push('./register');
  }
  render(){
    return (
    <div>
      <Logo />
      <div style={{display: 'flex',justifyContent:'center'}}><h2>登录页面</h2></div>
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