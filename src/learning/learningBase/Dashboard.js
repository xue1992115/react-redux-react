import React from 'react'
import { Link, Route, Redirect} from 'react-router-dom'
import App from './App.js'
import { connect } from 'react-redux';
import { logout } from './Auth.redux.js'
//定义两个无状态组件
function Erying() {
  return <h2>xiao</h2>
}
function Qibinglian() {
  return <h2>xue</h2>
}
@connect(state=>state.auth,{ logout })
class Dashboard extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    console.log(this.props);
    
      const redirectToLogin = <Redirect to='/login'></Redirect>
      const app=(
        <div>
          <h1>独立团</h1>
          {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
        <ul>
          <li>
            <Link to="/dashboard">一营</Link>
          </li>
          <li>
            <Link to="/dashboard/erying">二营</Link>
          </li>
          <li>
            <Link to="/dashboard/qibinglian">骑兵连</Link>
          </li>
        </ul>
        <Route path="/dashboard/" exact component={App} />
        <Route path="/dashboard/erying" component={Erying} />
        <Route path="/dashboard/qibinglian" component={Qibinglian} />
      </div>
      )
      return this.props.isAuth ? app : redirectToLogin
  }
}
export default Dashboard
