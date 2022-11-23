window.onload = function () {
    // 箭头函数
    // 1 不可以使用arguments对象 该对象在函数体内不存在 代替使用rest
    function fn1() {
        console.log(arguments.length)
        console.log(arguments[2])   //arguments为伪数组 具备数组属性 不具备方法
    }
    fn1(1, 2, 4, 5, 6, 7, 8, 9)
    
    let fn2 = (...item) => {   //该写法等价于arguments rest参数只是一个名称 写法就是...+变量名
        console.log(item)    //注意...item将实参转化为数组 注意是真数组
    }
    fn2(1, 2, 3, 4, 5, 6, 7, 8, 9)
    

    // 2 this的指向问题 箭头函数不绑定this 他会捕获其所在上下文的this值 作为自己的this值
    // 默认window 有点调用为调用者
    var str = 'global'
    var obj = {
        str: 'private',
        getStr: function () {
            console.log(this.str)
        }
    }
    obj.getStr()   //private
    let fn3 = obj.getStr
    fn3()   //无调用者 严格模式下为undefined 非严格模式下为global(默认指向window)


    var str = 'global'
    var obj = {
        str: 'private',
        getStr: () => {
            console.log(this.str)
        }
    }
    obj.getStr()   //global  obj的上下文是window
}