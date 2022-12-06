// async await结合可以让异步代码看起来与同步代码一样

// async函数返回的结果是Promise对象
/**
 * 1 若你自定义返回的结果不是一个Promise对象 那么它会变成一个成功的Promise对象返回
 * 2 若你返回的是抛出错误 则它会变成一个失败的Promise对象
 * 3 如你返回的是Promise对象 则你返回的是成功则成功失败即失败 但都是Promise对象
 */
async function fn() {
    // return 'iafdjiao'

    // return

    // throw new Error('出错了')

    return new Promise((resolve, reject) => {
        // resolve('成功的数据')
        reject('失败的数据')
    })
}

const result1 = fn()

result1.then(value => {
    console.log(value)
}, reason => {
    console.warn(reason)
})



/**
 * await
 * 1 await必须写在async函数里
 * 2 await右侧的表达式一般为promise对象
 * 3 await返回的是promise成功的值
 * 4 await的promise失败了就会抛出异常 需要通过try...catch处理
 */


// 创建promise对象
const pro = new Promise((resolve, reject) => {
    // resolve('用户数据')
    reject('失败了')
})

async function main() {
    try {
        let result = await pro

        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

main()