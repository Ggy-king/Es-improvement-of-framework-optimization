// 正则 命名捕获分组

// 声明一个字符串
let str = '<a href="http://www.wccsop.com">文本内容</a>'

// 正则 提取url 与文本
const reg = /<a href="(.*)">(.*)<\/a>/    //原写法

// 执行
const result = reg.exec(str)
console.log(result)
// ["<a href="http://www.wccsop.com">文本内容</a>",
// "http://www.wccsop.com",
// "文本内容",
// index: 0,
// input: "<a href="http://www.wccsop.com">文本内容</a>",
// groups: undefined]

console.log(result[1]);   // http://www.wccsop.com
console.log(result[2]);   // 文本内容




const reg2 = /<a href="(?<url>.*)">(?<text>.*)<\/a>/  // 分组写法
// 分组添加 ?<变量名>  这样后期提取的时候可以直接使用命名查找
const result2 = reg2.exec(str)
console.log(result2)
// 下面为展开
// 0: "<a href="http://www.wccsop.com">文本内容</a>"
// 1: "http://www.wccsop.com"
// 2: "文本内容"
// groups: { url: "http://www.wccsop.com", text: "文本内容" }
// index: 0
// input: "<a href="http://www.wccsop.com">文本内容</a>"

console.log(result2.groups.url)  //http://www.wccsop.com
