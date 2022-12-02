// 生成器
// 生成器其实是一个特殊的函数
// 异步编程 纯回调函数
//yield 可以看做是函数代码的分隔符

function* gen() {
    console.log('需要掉next才能执行，第一次next')
    yield '分割1'

    console.log('需要掉next才能执行，第二次next')
    yield '分割2'

    console.log('需要掉next才能执行...')
    yield '分割3'

    console.log('需要掉next才能执行...')
}

let iterator = gen()
console.log(iterator)   //返回的结构是一个迭代器对象
iterator.next() //执行函数


for (const iterator of gen()) {
    console.log(iterator)    //打印出yield后的语句 包括对应块的剩下代码行
}

// next方法传参
iterator.next()
iterator.next('A')  // 作为前一个yield语句的返回结果
iterator.next('B')  // 作为前一个yield语句的返回结果
iterator.next('C')  // 作为前一个yield语句的返回结果