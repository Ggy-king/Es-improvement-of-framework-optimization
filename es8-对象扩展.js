Object.values()
Object.entries()
Object.getOwnPropertyDescriptors()

const school = {
    name: 'xiaogao',
    age: 18,
    cities: ['北京','上海','天津']
}

// 获取对象所有的键
console.log(Object.keys(school))
// 获取对象所有的值
console.log(Object.values(school))

// entries 返回一个给定对象自身可遍历的属性[key,value]的数组 方便创建Map
console.log(Object.entries(school))  // [Array(2), Array(2), Array(2)]
// 展开
// 0: (2)["name", "xiaogao"]
// 1: (2)["age", 18]
// 2: (2)["cities", Array(3)]

console.log(new Map(Object.entries(school)));
// Map(3) { "name" => "xiaogao", "age" => 18, "cities" => Array(3) }



// 对象属性的描述对象
console.log(Object.getOwnPropertyDescriptors(school));
// 比如克隆某一对象时需要知道其深层次的属性 靠这个方法可以查到
