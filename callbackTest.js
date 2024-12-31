// function run() {
//     const start = Date.now();
//     for (let i = 0; i < 100000000; i++) {}
//     const end = Date.now();
//     console.log(end - start + "ms");
// }
// console.log("끝");

// function run(callback) {
//     setTimeout(() => {
//         const start = Date.now();
//         for (let i = 0; i < 100000000; i++) {}
//         const end = Date.now();
//         console.log(end - start + "ms");
//         callback();
//     }, 1000);
// }
// run(() => {console.log("끝남")});
// function fun() {
//     console.log("끝");
// }

function run() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const start = Date.now();
            for (let i = 0; i < 100000000; i++) {}
            const end = Date.now();
            console.log(end - start + "ms");
            resolve();
        }, 1000);
    });
}
async function process() {
    await run();
    await run();
    console.log("끝");
}

process();

/** 혼자서 한거 */
function myFun() {
    fetch("https://dayoon07.github.io/static-page-test/f/test.json")
        .then((data) => {
            console.log(data);
        })
        .catch((err) => {
            console.log(err);
        })
        .finally(() => {console.log("끝")});
}