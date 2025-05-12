class Person {
    name = 'zhangsan'
    age = 18
    #sex = '男' // 私有属性   存在兼容性问题
}

let p = new Person()
console.log(p.name); // zhangsan
console.log(p.age); // 18
console.log(p.#sex); // Uncaught SyntaxError: Private field '#sex' must be declared in an enclosing class