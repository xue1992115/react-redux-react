import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, asynGun } from './index.redux'
// const actionCreators = { addGun, removeGun, asynGun }
// const mapStatetoProps = state => {
//   return { num: state }
// }

//通过 connect方法将属性绑定在store，然后将store作为props传递下去
// App = connect(
//   mapStatetoProps,
//   actionCreators
// )(App)

//采用装饰器的方法
@connect(
  state => ({ num: state }),
  { addGun, removeGun, asynGun }
)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          现在有机枪
          {this.props.num}把
        </h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.asynGun}>过两天再交武器</button>
      </div>
    )
  }
}

export default App
