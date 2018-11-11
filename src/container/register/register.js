import React from 'react'
import Logo from '../../components/logo/logo'
import { WingBlank, WhiteSpace, Button} from 'antd-mobile'

class Register extends React.Component{
  constructor(props){
    super(props);
    this.register = this.register.bind(this);
  }
  render(){
    return (
    <div>
    <Logo />
    <h2>注册页面</h2>
    <WingBlank>
      <Button type="primary">登录</Button>
      <WhiteSpace />
      <Button type="primary">注册</Button>
    </WingBlank>
  </div>)
  }
}
export default Register