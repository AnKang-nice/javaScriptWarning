// 题目: 查看打印结果
function swapAB(a, b) {
    let temp = a;
    a = b;
    b = temp;
}

let a = 1;
let b = 2;
swapAB(a, b);
console.log(a, b);

let c = { age: 1 };
let d = { age: 2 };
swapAB(c, d);
console.log(c, d);

// A: 1 2
// B: 2 1

// 考察点：
// 1. 函数参数传递是值传递还是引用传递？
    // 在 JavaScript 中，函数参数传递总是按值传递​（pass by value），但对于对象类型（包括数组、函数等）来说，传递的是值的引用副本，这有时会让人误以为是按引用传递。
// 2. 函数内部对参数的修改不会影响外部变量的值。
// 答案：A
