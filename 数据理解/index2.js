// 认识函数参数
let obj1 = {
    age: 1,
    name: '小白',
}

let obj2 = {
    age: 2,
    name: '小黑',
}

function change(a, b) {
    let temp = a.age;
    a.age = b.age;
    b.age = temp;
}

change(obj1, obj2);

console.log(obj1.age, obj2.age); // 2 1



