let obj = {
    name: 'zhangsan',
    age: 18,
    sun: {
        name: 'lisi',
        age: 20
    }
}

function observer(obj) {
    let proxyData = new Proxy(obj, {
        get(target, key, receiver) {
            console.log('get', target[key], receiver)
            if (typeof target[key] === 'object') {
                return observer(target[key])
            }
            // return Reflect.get(target, key)
            return target[key]
        },
        set(target, key, value) {
            console.log('set', value)
            // Reflect.set(target, key, value)
            if (typeof value === 'object') {
                target[key] = observer(value)
            } else {
                target[key] = value
            }

        }
    })

    return proxyData


}

let proxyData = observer(obj)

// proxyData.name = 'wangwu'
// console.log(proxyData.name);

// proxyData.sun.name = 'zhaoliu'
// console.log(proxyData.sun.name);



proxyData.sex = '男' // 新增属性    可以看到 get  set 方法被调用了
console.log(proxyData.sex)