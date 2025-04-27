const obj = {
    a: 1,
    b: 2
}

Object.defineProperty(obj, 'c', {
    value: 3,
    enumerable: false,
})

obj.__proto__ = {
    d: 4,
    e: 5
}

console.log(Object.getOwnPropertyNames(obj)); // [ 'a', 'b', 'c' ]

console.log(Object.keys(obj));  // ['a', 'b']  // 只会获取到可枚举的属性


console.log(obj.hasOwnProperty('c'))  // true
console.log(obj.hasOwnProperty('d'))  // false

// ES2022 新增的 Object.hasOwn() 方法 
console.log(Object.hasOwn(obj, 'c'))  // true
console.log(Object.hasOwn(obj, 'd'))  // false



console.log('c' in obj)  // true
console.log('d' in obj)  // true    in 关键字可以查找原型链上的属性

console.log(Reflect.ownKeys(obj))  // [ 'a', 'b', 'c' ]  // Reflect.ownKeys() 方法返回一个数组，包含对象自身的所有属性，包括不可枚举的属性和 Symbol 属性，但不包括原型链上的属性。

console.log(Reflect.has(obj, 'c'))  // true
console.log(Reflect.has(obj, 'd'))  // true   // Reflect.has() 方法与 in 关键字类似，但它是一个函数调用，而不是运算符。它可以用于检查对象是否具有指定的属性，包括原型链上的属性。