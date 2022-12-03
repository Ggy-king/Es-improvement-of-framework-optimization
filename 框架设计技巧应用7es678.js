window.onload = function () {
    // set  类似数组 但成员无重复
    let arr2 = new Array()
    let arr3 = []
    arr2.push(1)
    arr3[0] = 1

    let obj2 = new Object()
    let obj3 = {}
    obj2.id = 1
    obj3['name'] = 'Gao'

    

    let s = new Set();
    s.add(1)
    s.add(1).add(2).add(3).add('2')  //连写   //去重为全等匹配   // {1,2,3,'2'}

    // 简化写法
    let s2 = new Set([1, 2, 5, 6, 8, 7, 9, 4, 5, 6])
    
    //获取对象属性 . [] 有什么区别

    // 面试题
    // 1 求大于50并去重返回数组类型
    var arr = [10, 20, 30, 40, 20, 10, 30, 50, 80, 60, 50, 60, 40, 50, 90, 90, 80, 80]
    let fil1 = arr.filter(sum => sum > 50)
    let fil2 = new Set(fil1)
    let fil3 = Array.from(fil2)  // let fil3 = [...fil2]

    // 简化
    let result = [...new Set(arr.filter(a => a > 50))]
    console.log(result);

    // 2 过滤掉3或3的倍数
    var arr1 = [{ value: 10 }, { value: 3 }, { value: 33 }, { value: 35 }, { value: 60 }, { value: 60 }, { value: 10 }, { value: 33 }]
    let fil4 = arr1.filter(num => num.value % 3 != 0)
    console.log(fil4)


    s2.size  //元素的个数
    s2.delete()  //删除某个元素
    s2.has() //判断某个元素存在与否
    s2.clear()  //清空
}