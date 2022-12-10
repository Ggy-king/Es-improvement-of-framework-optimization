Promise.allSettled()
// 接收Promise数组 并返回成功的Promise对象 对象中有成功的状态与你需要返回的值

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('数据一')
    }, 1000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('数据二')
        reject('出错了')
    }, 1000);
})

// 演示
const result = Promise.allSettled([p1, p2])

console.log(result)
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: Array(2)
// 0: { status: "fulfilled", value: "数据一" }
// 1: { status: "fulfilled", value: "数据二" }
// length: 2


Promise.all() //该方法 都成功才算成功