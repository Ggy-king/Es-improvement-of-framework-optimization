// 动态 import
// import()函数 返回结果是一个promise对象

const btn = document.getElementById('btn')

btn.addEventListener('click', function () {
    import('./es11-私有属性').then(module => {
        console.log(module)  //module 是 你所引入的那个页面中的所暴露的
    })
})