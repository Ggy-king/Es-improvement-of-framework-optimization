// BigInt()

// 大整形:   用于更大整形数值的运算

// 使用: 只需要在整数后面加n即可

let n = 521n

console.log(n, typeof (n))


let a = 123
const b = BigInt(a)
console.log(b)

// 大数值运算
let max = Number.MAX_SAFE_INTEGER   //表示最大安全数值
console.log(max)  // 9007199254740991
console.log(max + 1)  // 9007199254740992
console.log(max + 2)  //9007199254740992  计算出错

// 处理

console.log(BigInt(max) + BigInt(1))   // 必须同类型相加 9007199254740992n
console.log(BigInt(max) + BigInt(2))   //  9007199254740993n
console.log(BigInt(max) + BigInt(123))   // 9007199254741114n
