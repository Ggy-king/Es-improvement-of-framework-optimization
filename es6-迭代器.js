// 迭代器
// iterator

/**
 * 迭代器是一种接口 为各种不同数据提供统一的访问机制
 * 任何数据结构只要部署 iterator 接口 就可以完成遍历操作
 * 
 */

// 对这个概念简单来讲就是各种对象的一种属性

/**
 * 1 es6创造了for...of遍历 iterator接口主要用于for...of消费
 * 2 原生具备iterator接口的数据有
 * Array
 * Arguments
 * Set
 * Map
 * String
 * TypedArray
 * NodeList
 */


const arr = ['a', 'b', 'c', 'd']
for (const v of arr) {   // 如果是for in 显示的是键名 0123  (无自定义键名 即是其下标)
    console.log(v)   //正常显示键值 abcd
}


// 实例

const test = {
    name: 'Gao',
    arr: [
        'one',
        'two',
        'three',
        'four'
    ],
    // iterator操作改变该对象
    [Symbol.iterator]() {   // iterator的原型设计为函数
        // 索引变量
        let index = 0
        // 保存this
        let that = this
        // 实现需求
        return {
            next: function () {
                if (index < that.arr.length) {
                    const result = { value: that.arr[index], done: false }
                    // 下标自增
                    index++
                    // 返回结果
                    return result
                } else {
                    return { value: undefined, done: true }
                }
            }
        }
    }
}

// 需求 使用for...of只操作test对象就可以遍历到arr中的值且遍历arr的值
for (const iterator of test) {
    console.log(iterator)
}
