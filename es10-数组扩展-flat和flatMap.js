// flat方法
// 将高维数组转化成低维数组

const arr = [1, 2, [3, 4, [5]]]
arr.flat()   //转化为二维数组  括号中默认为1
arr.flat(2)  //转化为一维数组  2表示深度


//flatMap
const arr1 = [1, 2, 5, 6, 5]
const result = arr1.map(item => item * 10)  //乘10返回

const result1 = arr1.flatMap(item => item * 10)  //乘10返回 并在外层套上数组形式 即将flat与map结合


