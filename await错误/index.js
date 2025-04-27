let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('ok')
        reject(new Error('error'))
    }, 1000)
})

// 1. try catch 
try {
    let res = await p;
    console.log(res);

} catch (error) {
    console.log(error); // Error: error

}


// 2. then catch
let res = await p.catch(err => {
    console.log(err, 11); // Error: error
    return 'error_info'
})

console.log(res); // error


