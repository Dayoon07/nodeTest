console.log("Hello World");

function plus() {
    let val = 0;
    const arr = [];
    for (let i = 0; i <= 10; i++) {
        const ran = Math.random() * 100;
        val += ran;
        arr.push(ran);
    }
    console.log(arr.sort((a, b) => a - b).reverse());
    console.log(`합계 : ${val} \n`);
}

function str(a, b) {
    const arr = [];
    for (let j = b.length - 1; j >= 0; j--) {
        const str2 = b.substring(j, j + 1);
        arr.push(str2);
    }
    for (let i = b.length - 1; i >= 0; i--) {
        const str1 = a.substring(i, i + 1);
        arr.push(str1);
    }
    console.log("문자열 : " + arr);
}

function calc(a, b, type) {
    switch (type) {
        case 1:
            console.log("더하기 합계 : " + (a + b));
            break;
        case 2:
            console.log("빼기 : " + (a - b));
            break;
        case 3:
            console.log("곱하기 : " + (a * b));
            break;
        case 4:
            console.log("나누기 : " + (a / b));
            break;
    }
}

function file_IO() {
    const fs = require('fs');
    const data = fs.readFileSync('C:/Temp/test.txt', 'utf8');
    try {
        console.log('파일 내용:', data);
    } catch (err) {
        console.error('파일을 읽는 중 오류 발생:', err);
    }
}

const words = ['apple', 'school', 'hi', 'text'];
words.forEach(checkWordConditions);

function checkWordConditions(word) {
    const isLongEnough = word.length >= 5;

    const isFirstAndLastSame = word.charAt(0) === word.charAt(word.length - 1);

    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const hasVowel = [...word].some(char => vowels.includes(char.toLowerCase()));

    console.log(`확일할 문자 : ${word}`);
    console.log(`- 5자 이상 : ${isLongEnough ? '맞음' : '아님'}`);
    console.log(`- 첫번째와 마지막이 같은 문자 : ${isFirstAndLastSame ? '맞음' : '아님'}`);
    console.log(`- 모음이 있는 지 확인: ${hasVowel ? '맞음' : '아님'}`);
    console.log('----------------------------');
}

function sss() {
    const a = "Hello World";
    const b = "I am happy";
    console.log(a.split(" "));
    console.log(b.split(" "));
}
sss();

function number(num) {
    const arr = [];
    for (let i = 0; i < 10; i++) {
        const ran = Math.floor(Math.random() * 100);
        arr.push(ran);
    }
    setTimeout(() => {
        console.log("랜덤 숫자 : " + arr);
    }, 1000);
    arr.forEach(e => {
        if (num > e) {
            console.log("숫자가 큽니다.");
        } else if (num === e) {
            console.log("숫자가 같습니다. O O O" + "\n 사용자가 입력한 숫자 : " + num + "\n 맞춘 숫자 : " + e);
        } else {
            console.log("숫자가 작습니다.");
        }
    });
}
number(42);

function recursion(v) {
    if (v == 0) {
        return setTimeout(() => {console.log("끝\n"+v)}, 1000);
    } else {
        return (v *= recursion(v-1));
    }
}

setTimeout(() => {
    console.log(recursion(7));
}, 3000);
