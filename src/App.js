import React from 'react'
import { connect } from 'react-redux'
import { addGun, removeGun, asynGun } from './index.redux'
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
const mapStatetoProps = state => {
  return { num: state }
}
const actionCreators = { addGun, removeGun, asynGun }
App = connect(
  mapStatetoProps,
  actionCreators
)(App)
export default App
