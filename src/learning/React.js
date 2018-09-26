/**
 * react的基础语法
 * 1、JSX的语法
 * js里边直接写html
 * class要写成className
 * 变量{}包裹即可
 *
 * 2、react的api
 * 一切都是组件
 * 组件之间通过属性进行传递
 * 类实现组件，使用JSX语法
 *
 * 3、组件之间传递属性
 * 组件之间通过props传递属性
 * 组件内部通过this.props获取值
 * 如果组件只有render函数，还可以用函数的形式
 *
 * 4、组件内部state
 * 组件内部通过state管理状态
 * JSX本质就是js，所以直接数组map渲染列表
 * constructor设置初始状态，记得执行super
 * 如state就是一个不可变的对象，使用this.state获取
 *
 * 5、事件
 * onClick点击事件
 * JSX里，onClick={this.函数名}来绑定事件
 * this的引用问题，需要在构造函数里用bind绑定this
 * this.setState修改state，记得返回新的state，而不是修改state
 *
 * 6、React的声明周期
 * React组件有若干钩子函数，在组件不同状态执行
 * 初始化周期
 * 组件重新渲染生命周期
 * 组件卸载声明周期
 * 初始化   更新   卸载
 *
 */
