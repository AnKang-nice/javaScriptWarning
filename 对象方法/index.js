let obj = {
    a: 1
}

console.log(obj.__proto__.isPrototypeOf(obj)) // true
console.log(NaN === NaN) // false
console.log(+0 === -0) // true
console.log(Object.is(NaN, NaN)) // true
console.log(Object.is(0, -0)) // false
console.log(Object.is(+0, -0)) // false

let obj2 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}

const { a, b, ...res } = obj2

console.log(res);// { c: 3, d: 4 }
