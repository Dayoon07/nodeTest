function hello1() {
    console.log("Hello, World1");
}

var hello2 = function() {
    console.log("Hello, World2");
}

const hello3 = () => {
    console.log("Hello, World3");
}

function testHello(h) {
    h();
}
/************************************************************************************/
function add1(a, b) {
    console.log(a + b);
}
const add2 = function(a, b) {
    console.log(a + b);
}
const add3 = (a, b) => {
    console.log(a + b);
}

/** 매개 값이 2개인 함수만 들어오면 실행하는 함수 */
function fRead(a) {
    a(1, 2);
}

fRead(add1);