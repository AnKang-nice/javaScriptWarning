let arr = [1, 2, 3, 4, 5]

let SetData = new Set(arr)

SetData.delete(1) // 删除元素

console.log(SetData) // Set(4) { 2, 3, 4, 5 };

SetData.add(1) // 添加元素

console.log(SetData) // Set(5) { 2, 3, 4, 5, 1 };


let obj = { a: 1 }
SetData.add(obj) // 添加对象
SetData.add({ a: 1 }) // 添加对象

SetData.has({ a: 1 }) // false  // 对象是引用类型，引用不同，所以不相等
SetData.has(obj) // true  // obj 是引用类型，引用相同，所以相等

console.log(SetData) // Set(7) { 2, 3, 4, 5, 1, { a: 1 }, { a: 1 } }

console.log(SetData.size) // 7

for (let item of SetData) {
    console.log(item) // 2 3 4 5 1 { a: 1 } { a: 1 }
}
// 键和值是相同的
for (const [key, value] of SetData.entries()) {
    console.log(key, value);
    console.log(key === value); // true   key 和 value 是相同的
}


// 数组去重
let arr2 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
let arr3 = [...new Set(arr2)]
console.log(arr3) // [ 1, 2, 3, 4, 5 ]


const weakMapData = new WeakSet();
let obj2 = { a: 1 }
weakMapData.add(obj2);
weakMapData.add({ a: 1 });
obj2 = null // obj2 会被垃圾回收机制回收
// weakSet 只能存储对象，不能存储基本数据类型

console.log(weakMapData)

// 官方示例
// 对传入的 subject 对象内部存储的所有内容执行回调
function execRecursively(fn, subject, _refs = new WeakSet()) {
    // 避免无限递归
    if (_refs.has(subject)) {
        return;
    }

    fn(subject);
    if (typeof subject === "object") {
        _refs.add(subject);
        for (const key in subject) {
            execRecursively(fn, subject[key], _refs);
        }
    }
}

const foo = {
    foo: "Foo",
    bar: {
        bar: "Bar",
    },
};

foo.bar.baz = foo; // 循环引用！
execRecursively((obj) => console.log(obj,111), foo);