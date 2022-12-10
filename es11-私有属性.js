// 私有属性

class Person {
    // 共有属性
    name
    // 私有属性
    #age
    #weight

    constructor(name,age,weight) {
        this.name = name
        this.#age = age
        this.#weight = weight
    }
    one() {
        console.log(this.#age)  // 内部可以访问
        console.log(this.#weight) // 内部可以访问
        console.log(this.name)
    }
}

const girl = new Person('校长', 18, 女)

girl.one()

console.log(girl.#age)  // 外部不可以访问 
console.log(girl.#weight) // 外部不可以访问
console.log(girl.name)  // 可以访问

