/**
 * 1 symbol的值是唯一的，用来解决命名冲突的问题
 * 2 symbol的值不能与其他数据进行运算或对比
 * 3 symbol定义的对象属性不能使用for in 循环遍历 但是可以使用reflect.ownKeys来获取对象所有键名
 */


let s = Symbol()
console.log(s, typeof s)  // symbol() "symbol"

let s1 = Symbol('张三')
let s2 = Symbol('张三')
// s1 != s2

let s4 = Symbol.for()  //函数创建 该方式创建可以得到唯一值

// 1
// 使用  给对象添加属性和方法 表示独一无二的

let game = {}   //原有对象 不改变其结构
 
let method = {  //先声明一个对象 自己创建的 
    up: Symbol(),  //方法一
    down: Symbol()  // 方法二 
}

game[method.up] = function () {
    // 方法一创建 写入其内部 不改变原有
    // 即将method中的方法作为参数传入game中 且是唯一不覆盖
}


// 2
// Symbol为动态值 不可以直接作为参数写
let s5 = {
    [Symbol('say')]: function () {    //作为参数需要加[]
        console.log('say');
    }
}

// 3
// Symbol内置值 即其属性值
// hasInstance: 当其他对象调用instanceof运算符时 判断是否为该对象的实例时 会调用这个方法
class Person {
    static [Symbol.hasInstance](param) {
        console.log('param接收到的参数为instanceof前的值,即检测的东西');
        console.log('hasInstance是被用来进行类型检测的')
    }
}
let o = {}
console.log(o instanceof Person);


// isConcatSpreadable: 其返回一个布尔值 表示该对象用于Array.prototype.concat()时 是否可以展开
const arr = [1, 2, 3]
arr[Symbol.isConcatSpreadable] = false   //该表达式不可以展开

Symbol.unscopables   //在指定使用with关键字时 那些属性会被with环境排除
Symbol.match
Symbol.replace
Symbol.iterator