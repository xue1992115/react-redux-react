import React from 'react'
class App extends React.Component {
  render() {
    const store = this.props.store
    const addGun = this.props.addGun
    const removeGun = this.props.removeGun
    const asynGun = this.props.asynGun
    const num = store.getState()
    return (
      <div>
        <h1>
          现在有机枪
          {num}把
        </h1>
        <button onClick={() => store.dispatch(addGun())}>申请武器</button>
        <button onClick={() => store.dispatch(removeGun())}>上交武器</button>
        <button onClick={() => store.dispatch(asynGun())}>
          过两天再交武器
        </button>
      </div>
    )
  }
}
export default App
