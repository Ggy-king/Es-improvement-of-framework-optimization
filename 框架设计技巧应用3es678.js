window.onload = function () {
    // 1 箭头函数 简化了函数的定义
    let f = v => v
    let f1 = function (v) {
        return v
    }

    let f2 = () => 132
    let f3 = (n1, n2) => n1 + n2

    const arr4 = [10, 12, 5, 69, 42, 19]  //求小于20的数
    const num = arr4.filter(v => v < 20)
    console.log(num)

    // 2 箭头函数不能当作构造函数 不可以使用new命令  无this指向
    function Person(name, age) {  //生成对象的模板
        this.name = name
        this.age = age
    }

    let p1 = new Person('adc', 18)
    p1.age
    p1.name

    // 3 箭头函数没有原型 对象
    function Person3() { }
    Person3.prototype.type = "abc"  //相当于原型对象中添加属性type
    Person3.prototype.action = function () { return 123 }  //添加函数

    let f4 = new Person3()
    f4.type
    f4.action()



}