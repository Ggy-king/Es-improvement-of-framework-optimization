// Object.fromEntries()
// 将二维数组转化为对象
// 1 二维数组
const result = Object.fromEntries([
    ['1', '5']
    ['2','6']
])

// 2 Map
const m = new Map()
m.set('name', 'Gao')
const result2 = Object.fromEntries(m)


// Object.entries() 是将对象转化为二维数组