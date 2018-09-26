/**
 * redux的学习内容
 * 一、redux是什么
 * 二、redux的核心概念
 * 三、redux实战
 *
 *
 * 一、redux是什么？
 * redux是状态管理库，专注于状态管理，和react解藕。
 * 单一状态，单向数据流
 * 核心概念，store，action,dispatch,reducer,state
 * store用于存储所有的状态，记录state
 * 需要改变的时候，告诉dispatch,要干什么action
 * 然后reducer用于处理变化，拿到state，action,返回一个新的state
 * 二、redux如何和react一起使用？
 *把store.diapatch方法传递给组件，内部可以调用修改状态
 subscribe订阅render函数，目的是每次修改都会重新渲染
 redux的相关内容都会移动到index.redux.js单独管理
 */
