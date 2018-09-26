## npm start

## redux 的核心概念

- `action`
  action 就是一个对象，并且必须带有 key 为 type 的字段，例如： {type:”ADD”}
- `Reducer`
  就是一个纯函数，可自己命名，但是函数的参数只能是 state 和 action，也就是传递旧的 state，返回新的 state。
  注意：如果 state 是一个对象的时候，就需要采用 Object.assign(该方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象)
- `store`
  store 是一个全局对象，将 action 和 reducer 以及 state 联系在一起
  store 管理 state
  提供 getState 方法获取 state
  提供 dispatch(action)方法更新 state
  提供 subscribe 方法注册监听
- `action创建函数`
  创建一个 action 的函数，函数返回一个对象
  使用的时候直接 store.dispatch(add())
  action 创建函数的意义:action 创建函数表面是返回一个对象,真正的意义在于逻辑的封装
- `待后续补充 redux的原理----------------------------------------`

##redux-thunk 中间件的认识
Redux 默认只能处理同步任务通常，处理异步任务通常需要 redux-thunk 中间件
redux-thunk 中间件可以让 `action` 创建函数先不返回一个 action 对象，而是返回一个函数，函数传递两个参数`(dispatch,getState)`,在函数体内进行业务逻辑的封装
通常是使用 applyMiddleWare 开启中间件

```js
function add() {
  return {
    type: 'ADD'
  }
}

function addIfOdd() {
  return (dispatch, getState) => {
    const currentValue = getState()
    if (currentValue % 2 == 0) {
      return false
    }
    //分发一个任务
    dispatch(add())
  }
}
```

## redux 的调试工具

chrome 中 Redux DevTools 工具

## react-redux

`待补充内容-------------`
