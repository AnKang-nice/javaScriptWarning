// new Promise((resolve, reject) => {
//     console.log("0");
//     resolve();
// }).then(() => {
//     console.log('6');

//     setTimeout(() => {
//         console.log("3");
//     }, 100);
// });

// setTimeout(() => {
//     console.log("1");
//     new Promise((resolve, reject) => {
//         console.log("7");
//         resolve();
//     }).then(() => {
//         setTimeout(() => {
//             console.log("5");
//         }, 50);
//     });
// }, 300);
// setTimeout(() => {
//     console.log("2");
// }, 200)

// console.log("4");

// 同一批次中的宏任务  按时间先后

// 0  4  6  3  2  1  7  5

// 微   7
// 宏   5




new Promise((resolve, reject) => {
    console.log("0");
    resolve();
}).then(() => {
    console.log('6');

    setTimeout(() => {
        console.log("3");
    }, 100);
});

setTimeout(() => {
    console.log("1");
    new Promise((resolve, reject) => {
        console.log("7");
        resolve();
    }).then(() => {
        console.log('8');

        setTimeout(() => {
            console.log("5");
        }, 100);
    });
}, 50);
setTimeout(() => {
    console.log("2");
}, 200)

console.log("4");

// 0  4  6  2  1  7  8 5  3

// 微 
// 宏   


// 另一种方式   宏任务按照时间先后往里面放
// 0 4  6  2  1  7  8  5  3 

// 1. 
// 0 4
// 微： 6
// 宏： 1（300）  2（200）
// 2.
// 0  4  6
// 微：
// 宏： 1（300）  2（200） 3（400）
// 3.
// 0 4  6  2  1  7
// 微：8
// 宏：3（400）
// 4.
// 0 4  6  2  1  7 8
// 微：
// 宏：3（400） 5（50）
// 5.
// 0 4  6  2  1  7 8 5  3
// 微：
// 宏：3（400） 5（50）
