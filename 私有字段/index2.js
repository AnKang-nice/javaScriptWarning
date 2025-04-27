// 作用域 私有
import p from './index.js';

console.log(p);

// console.log(p[key]); // error报错  拿不到key  


// 但是  还是可以拿到key
console.log(p[Object.getOwnPropertyNames(p)[0]]); // John Doe
console.log(p[Object.getOwnPropertySymbols(p)[0]]); // 18