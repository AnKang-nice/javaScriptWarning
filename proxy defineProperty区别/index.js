let obj = {
    name: 'zhangsan',
    age: 18,
    sun: {
        name: 'lisi',
        age: 20
    }
}

let arr = [1, 2, 3, 4, 5]

function observer(obj) {
    // 1. 遍历对象的每一个属性
    for (let key in obj) {
        // 2. 判断属性值是否是对象
        let v = obj[key]
        if (typeof obj[key] === 'object') {
            // 3. 如果是对象，递归调用 observer 函数
            observer(obj[key])
            return
        }
        // 4. 使用 defineProperty 定义属性的 getter 和 setter 方法
        Object.defineProperty(obj, key, {
            get() {
                // 获取就可以被拦截到   
                console.log('get', v)
                return v
            },
            set(value) {
                console.log('set', value)
                v = value
            }
        })
    }
}

observer(obj)
observer(arr)

obj.name = 'wangwu'
// console.log(obj.name)


function updateName() {
    
    document.querySelector('#name').innerHTML = obj.name
}



// obj.sun.name = 'zhaoliu'
// console.log(obj.sun.name)

// obj.sex = '男' // 新增属性   并没有被代理  get  set 方法没有被调用
// console.log(obj.sex)


// arr[1] = 10
// console.log(arr[1])
// arr[10] = 100 // 数组新增属性   也没有被代理
// console.log(arr[10]) // 100