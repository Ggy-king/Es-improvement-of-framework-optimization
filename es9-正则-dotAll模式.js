let str = `
<ul>
    <li>
        <a>肖申克的救赎</a>
        <p>上映时间:666</p>
    </li>
    <li>
        <a>阿甘正传</a>
        <p>上映时间:777</p>
    </li>
</ul>
`

// 需求: 取出a标签内和p标签的文字
// 原写法正则
const ref = /<li>\s+<a>(.*?)<\/a>\s+<p>(.*?)<\/p>/   //麻烦
const result = ref.exec(str)
console.log(result)

// 0: "<li>↵        <a>肖申克的救赎</a>↵        <p>上映时间:666</p>"
// 1: "肖申克的救赎"
// 2: "上映时间:666"
// groups: undefined
// index: 10
// input: "↵<ul>↵    <li>↵        <a>肖申克的救赎</a>↵        <p>上映时间:666</p>↵    </li>↵    <li>↵        <a>阿甘正传</a>↵        <p>上映时间:777</p>↵    </li>↵</ul>↵"
// length: 3


// dot是 . 的意思 . 是元字符 表示除换行符之外的任意单个字符
// dotAll 所有都可以匹配
// 多了一个模式修正符s   //s

const ref1 = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/s
const result1 = ref1.exec(str)
console.log(result1)

// 0: "<li>↵        <a>肖申克的救赎</a>↵        <p>上映时间:666</p>"
// 1: "肖申克的救赎"
// 2: "上映时间:666"
// groups: undefined
// index: 10
// input: "↵<ul>↵    <li>↵        <a>肖申克的救赎</a>↵        <p>上映时间:666</p>↵    </li>↵    <li>↵        <a>阿甘正传</a>↵        <p>上映时间:777</p>↵    </li>↵</ul>↵"
// length: 3


// 全局匹配
const ref2 = /<li>.*?<a>(.*?)<\/a>.*?<p>(.*?)<\/p>/gs
let result2
let data = []
while (result2 = ref2.exec(str)) {
    data.push({ title: result2[1], time: result2[2] })
}

console.log(data)

// 0: { title: "肖申克的救赎", time: "上映时间:666" }
// 1: { title: "阿甘正传", time: "上映时间:777" }
// length: 2