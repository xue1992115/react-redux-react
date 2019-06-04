import React from 'react';
import { List, InputItem, Radio, WhiteSpace, Button, WingBlank } from 'antd-mobile';
import Logo from '../../components/logo/logo';

const RadioItem = Radio.RadioItem;
class Register extends React.Component {
  /**
   *Creates an instance of Register.
   * @param {*} props
   * @memberof Register
   */
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '',
      type: 'genius' //或者 boss
    };

    this.handleRegister = this.handleRegister.bind(this);
  }
  /**
   * 设置值改变
   *
   * @param {*} key
   * @param {*} value
   * @memberof Register
   */
  handleChange(key, value) {
    this.setState({
      [key]: value
    });
  }
  /** 注册用户 */
  handleRegister() {
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <Logo />
        <WingBlank>
          <List>
            <InputItem onChange={v => this.handleChange('user', v)}>
              用户名
            </InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={v => this.handleChange('pwd', v)}
            >
              密码
            </InputItem>
            <WhiteSpace />
            <InputItem
              type="password"
              onChange={v => this.handleChange('repeatpwd', v)}
            >
              确认密码
            </InputItem>
            <WhiteSpace />
            <RadioItem
              onChange={v => this.handleChange('type', 'genius')}
              checked={this.state.type === 'genius'}
            >
              牛人
            </RadioItem>
            <WhiteSpace />
            <RadioItem
              onChange={v => this.handleChange('type', 'boss')}
              checked={this.state.type === 'boss'}
            >
              BOSS
            </RadioItem>
            <Button type="primary" onClick={this.handleRegister}>注册</Button>
          </List>
        </WingBlank>
      </div>
    );
  }
}
export default Register;
