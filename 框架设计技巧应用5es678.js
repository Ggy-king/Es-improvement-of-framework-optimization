window.onload = function () {
    // 数组结构
    var a = 1, b = 2, c = 3

    var [a, b, c] = [1, 2, 3]  //模式匹配


    var arr = [1, 3, 3]
    var obj = { id: 1, name: 'myName' }
    var flag = true

    var [arr, obg, flag] = [[1, 2, 3], { id: 1, name: 'myName' }, true]

    let [a, b] = [1]  // => let a = 1; let b; [1,undefined]

    // 默认值 
    var arr = [10, 20]
    var x = arr[0] || 1  //es5

    var [x = 1, y] = arr  //es6  需要严格等于undefined默认值才会生效


    // 面试题
    var [x = 1, y = 1] = [null, undefined] //[null,1]

    function fn() {
        return 123
    }
    var [x = fn(), y = 1] = [10, 20]  //[10,20]
    var [x = fn(), y = 1] = [] //[123,1]
    
}