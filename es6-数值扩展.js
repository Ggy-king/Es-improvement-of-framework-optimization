Number.EPSILON
/**
 *  Number.EPSILON 是 js 中的最小精度 
 * 其值接近2.22044E-16
 * 作用判断浮点数是否相等 其判断值就是EPSILON
 */

// 二进制和八进制和十六进制
let a = 0b1010
console.log(a) // 10
let b = 0o777
console.log(b) // 511
let c = 0xff
console.log(c) // 255


Number.isFinite
/**
 * Number.isFinite 检测一个数值是否为有限数
 * Number.isFinite(100)
 */

Number.isNaN
/**
 * 检测是否为NaN
 * Number.isNaN(123)
 */

Number.parseFloat
Number.parseInt
/**
 * Number.parseFloat(1.2345sais) 字符串转化为浮点数
 * Number.parseIbt(12345sais) 字符串转化为整数
 */

Number.isInteger
/**
 * Number.isInteger(2.5)  判断是否为整数
 */

Math.trunc 
/**
 * Math.trunc(3.5) // 3
 * 将小数部分给抹掉
 */

Math.sign
/**
 * Math.sign(100)  // 1
 * Math.sign(0)    // 0
 * Math.sign(-100) // -1
 * 判断一个数是正数 负数 还是零
 * 注意 -0返回-0 NaN返回NaN
 */