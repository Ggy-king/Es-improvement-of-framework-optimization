window.onload = function () {
    var a = 10
    let b = 100
    const c = 1000

    //1、let const 不存在变量提升
    console.log(x)
    var x = 10

    //预解析
    var x
    //逐行解析
    console.log(x)   //undefined
    x = 10

    //2、let const 在同一个作用域下不能重复定义相同的名称
    var a1 = 10
    var a1 = 100
    console.log(a1)  //100

    let b1 = 10
    let b1 = 100  //报错

    let b2 = 10
    function fn1() {
        let b2 = 100
    }

    var b3 = 10
    let b3 = 100  //报错


    //3、有着严格的作用域  通过{}来判断块级作用域
    function fn2() {
        var c1 = 10
        if (true) {
            var c1 = 100  //var全局污染
        }
        console.log(c1);
    }
    fn2()  //100

    function fn2() {
        let c1 = 10
        if (true) {
            let c1 = 100  
        }
        console.log(c1)  //打印为同一作用域下的 没有在向下找
    }
    fn2()  //10

    for (var i = 0; i < 5; i++) { }
    console.log(i)  //5    i成为全局变量

    for (let i = 0; i < 5; i++) { }
    console.log(i)  //i is not defined


    // 面试题
    function fn3(i) {
        // var i = 10
        let i = 100
        console.log(i)  //Identifier 'i' has already been declared  i已经被声明
    }
    fn3(10)   //  该写法其实是在let i = 100 前加上了一句 var i = 10

    var arr = []
    for (let i = 0; i < 5; i++) {
        arr[i] = function () {
            console.log(i)
        }
    }
    arr[2]()   //2   let严格遵守块级作用域
}