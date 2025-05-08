// 1. promise的成功失败
// const p1 = new Promise((resolve, reject) => {
//     resolve('ok')
// });

// /*
// let a = await p1.then(res => {
//     return res
// })
// */

// let a = p1.then(res => {
//     return res
// })

// let b = a.then(res => {
//     console.log(res); // ok
//     return Promise.reject('error')
// })

// let c = b.then(res => {
//     console.log(res, 's'); // ok
// }).catch(err => {
//     console.log(err, 'f'); // error
//     return 'error_info'
// })

// let d = c.then(res => {
//     return new Error('error')
//     console.log(res, 's'); // error_info
// }).catch(err => {
//     console.log(err, 'f');
// })

// let e = d.then(res => {
//     console.log(res, 's'); // Error: error
// }
// ).catch(err => {
//     console.log(err, 'f');
// })


// 示例验证   随意测试
async function demo() {
    new Promise((resolve, reject) => {
        console.log(1);
        resolve();
    }).then(() => {
        return Promise.reject(2);
        throw new Error(3);
    })
}

async function test() {
    console.log(11);

    let res = await demo()
    console.log(res); // undefined
    return res
}

console.log(test()); // Promise { <pending> }




