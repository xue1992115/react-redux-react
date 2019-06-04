
import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import Login from './container/login/login';
import Register from './container/register/register';
import reducers from './reducer';
import AuthRoute from './components/authroute/authroute'
import './config';


// 激活中间件的方法
const store = createStore(
  reducers,
  //  组合一些中间件
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
function Boss(){
  return <h2>Boss页面</h2>
}
ReactDom.render(
  // Provider提供上下文环境，供子类获取store中的数据
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <AuthRoute></AuthRoute>
        <Route path='/boss' component={Boss}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/register' component={Register}></Route>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
