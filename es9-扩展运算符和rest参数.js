/**
    rest参数与spread扩展运算符在es6中已经引入 不过es6中只针对数组
    在es9中为对象提供了像数组一样的rest参数和扩展运算符
*/


function connect({ host, port, username, password }) {
    console.log(host);
    console.log(port);
    console.log(username);
    console.log(password);
}

connect({
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root'
})


function connect1({ host, port, ...use }) {  // 使用rest参数 位置需为最后 剩下多余参数都会存到use中
    console.log(host);
    console.log(port);
    console.log(use);
}

connect1({
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: 'root',
    type: '666'
})


const skill = {
    q: 1,
    w: 2,
    e: 3,
}
console.log(...skill)  

const skill1 = { a: 5 }
const skill2 = { b: 6 }
const skill3 = { c: 7 }
const skill4 = { d: 8 }
const skill5 = {...skill1,...skill2,...skill3,...skill4}