// 正向断言 根据当前匹配的后边的内容来判断前边的是否满足条件

// 声明
let str = 'bbcisd4564615拿出卫生部粗45645啦啦啦'

// 需求: 取出数字且只要最后面的
const reg = /\d+(?=啦)/

const result = reg.exec(str)

console.log(result)
// 0: "45645"
// groups: undefined
// index: 19
// input: "bbcisd4564615拿出卫生部粗45645啦啦啦"
// length: 1


// 反向断言 根据前边的内容来判断后边的是否满足条件

const reg1 = /(?<=粗)\d+/
const result2 = reg1.exec(str)
console.log(result2)
// 0: "45645"
// groups: undefined
// index: 19
// input: "bbcisd4564615拿出卫生部粗45645啦啦啦"
// length: 1