window.onload = function () {
    
    // 1 const声明一个只读的常量 一旦声明常量的值不能改变
    const a = 10
    a = 100
    console.log(a) //报错

    // const b; //报错 一旦定义必须赋值

    // 不是常量则可以改变 如数组 对象等
    const arr = [1, 2, 3]
    arr.push(4)
    console.log(arr)  //[1,2,3,4]

    const obj = {}
    obj.name = "lisi"
    
}