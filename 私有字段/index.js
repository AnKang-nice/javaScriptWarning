// 规范约束，但是还是能拿到  比如__命名


const key = '__name';
const key2 = Symbol('age');
class Person {
    [key] = 'John Doe';
    [key2] = 18;
}

const p = new Person();

export default p


// console.log(p[key]); // John Doe
// console.log(p[key2]); // 18


