// import { createStore } from 'redux'
// // 1、新建store
// // 通过reducer建立
// // 根据老的state，action生成新的
// function counter(state = 0, action) {
//   switch (action.type) {
//     case '加机关枪':
//       return state + 1
//     case '减机关枪':
//       return state - 1
//     default:
//       return 10
//   }
// }
// const store = createStore(counter)
// const init = store.getState()
// function listener() {
//   const init = store.getState()
//   console.log(`现在有${init}把机关枪`)
// }
// store.subscribe(listener)
// console.log(init)
// store.dispatch({ type: '加机关枪' })
// store.dispatch({ type: '加机关枪' })
// store.dispatch({ type: '减机关枪' })
import React from 'react'
import ReactDom from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
import App from './App'
import Auth from './Auth.js'
import Dashboard from './Dashboard.js'
import './config'
// import { counter } from './index.redux'
// 将合并过的reducers引入进来
import reducers from './reducer'
// 激活中间件的方法
const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
console.log(store.getState());

// 如何将store传入组件
//一、采用组件传递参数的方式，将store传入
//二、 组件内部通过this.props.store获取属性，以及方法
//三、采用store.subscribe()方法，注册监听事件，当state改变时，重新渲染一下。

// class Test extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return <h2>测试组件</h2>
//   }
// }
// Provider的作用是使组件可被链接

// BrowserRouter包裹整个应用
// link点击跳到指定路由
// exact表明完全匹配
// Route路由对应渲染模版
ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Auth} />
        <Route path="/dashboard" component={Dashboard} />
        <Redirect to="/dashboard" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
//  <Route path="/xiao" component={Xiao} />
// <Route path="/xue" component={Xue} />
