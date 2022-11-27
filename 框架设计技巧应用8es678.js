window.onload = function () {
    // map数据结构 类似于对象 也是键值对的集合 但是键的范围很广 也可以是变量
    let m1 = new Map()
    m1.set('id', 1).set('name', 'fang').set('age', 18)
    console.log(m1)   // Map(3) {"id" => 1, "name" => "fang", "age" => 18}

    var obj = {
        id: 1,
        content: 'test',
        result: [{ id: 2 }]
    }
    for (const key in obj) {     // 对象模式
        console.log(key)
        console.log(obj[key])
    }


    let m3 = new Map([['a', 1], ['b', 2], ['c', 3]])  // map数组对象模式
    for (const [k, v] of m3) {   //[键,值]
        console.log(k)
        console.log(v)
    }


    // map数据结构转换为object
    let m4 = new Map([['a', 1], ['b', 2], ['c', 3]])   // var m5 = {a:1,b:2,c:3}
    let m5 = {}
    for (const [k, v] of m4) {
        m5[k] = v
    }
    // console.log(m5)

    // object转换为map数据结构
    // let m4 = new Map([['a', 1], ['b', 2], ['c', 3]]) 

}