//ES6内容学习
/**
 * 块级作用域
 * 字符串
 * 函数
 * 对象扩展
 * 结构
 * 类
 * 模块化
 */
//1、块级作用域 let替换var,const声明不可变常量
{
    var name = 'hhahah';
    // let name='hxx';//报错，存在块级作用域
}
console.log(name);

//2、字符串，字符串模版
name = 'imooc';
console.log('hello ' + name);
console.log(`hello ${name}`);

//3、函数，主要是箭头函数
function hello (name) {
    console.log(`hello${name}`);
}
const hello2 = (name) => {
    console.log(`hello${name}`);
}
hello('jhhhh');
hello2('jhhhh');
setTimeout(() => { console.log('nihao') }, 1000)

const double = x => x * 2;
console.log(double(3));


function han (name1, name2) {
    console.log(name1, name2);
}
let arr = ['TOM', 'JOSN']
han.apply(null, arr);
han(...arr);

//4、对象的扩展  object.keys   values   entries   对象方法简写，计算属性   展开运算符...
const obj = { name: 'imooc', sex: 'man' }
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

//5、对象解构赋值，数组结构赋值
const arr3 = ['1', '2'];
let [arg1, arg2] = arr3;
console.log(arg1, arg2);



//6、class
class MyApp {
    constructor() {
        this.name = 'imooc'
    }
    sayHello () {
        console.log(`hello ${this.name}`)
    }
}
const app = new MyApp();
app.sayHello()


//7、es6中的数据结构
// set 、Map、Symbol




//8、模块化机制


//其他特性


