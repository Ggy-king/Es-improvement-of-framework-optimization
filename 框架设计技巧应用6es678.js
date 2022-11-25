window.onload = function () {
    // 对象解构
    var obj = {
        name: '123',
        age: 15,
        arr: [12, 23],
        code: 200
    }
    var { age = 26, arr, code } = obj  //允许默认值 与箭头一样

    var { name: n = 1, age: m } = obj  //别名使用冒号

    function fn({ name: n = 2, age: m = 3 }) { }   //函数形参上就可以直接解构
    fn(obj)

    // 面试题
    function fn1({ x, y } = { x: 0, y: 0 }) {
        return [x, y]
    }
    fn1({ x: 10, y: 10 })  //10 10
    fn1({ x: 10 })   //10 undefined
    fn1({})  //undefined undefined
    fn1()  //0 0

    function fn2({ x = 0, y = 0 } = {}) {
        return [x, y]
    }
    fn2({ x: 10, y: 10 })  //10 10
    fn2({ x: 10 })  //10 0
    fn2({})  //0 0
    fn2()  //0 0


}