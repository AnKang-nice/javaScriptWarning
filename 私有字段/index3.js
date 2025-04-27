const weakMapData = new WeakMap()

class Person {
    constructor() {
        weakMapData.set(this, {
            name: 'zhangsan',
        })
        console.log('constructor', weakMapData);
    }
    getData() {
        return weakMapData.get(this).name
    }
}

let p = new Person()

console.log(p.getData()) // zhangsan

// name 是私有的 不能被外部访问   因为就不在实例上
console.log(p.name); // undefined


