// 1. Number

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); //모듈러 연산 ( 나머지 연산 )

let inf = Infinity; // 양의 무한대
let mInf = -Infinity; // 음의 무한대

let nan = NaN; // Not a Number

// 2. String

let myNickName = "햐미";
let job = "student";

let introduce = myNickName + job;

// 2.1 템플릿 리터럴 문법
let introduceText = `${myNickName}는 ${job}예요`;

// 3. Boolean

// 참거짓. 주로 상태 관리에 사용
let isSwitchOn = true;
let isEmpty = false;

// 4. Null

let empty = null;

// 5. Undefined

// 변수는 있는데 아무 값이 들어가지 않았을 때
let none;
console.log(none);

//Null 과 Undefined
//Null은 진짜 의도하고 넣어줘야하는 값이고 Undefined는 미처 초기화하지 못했을 때 (?)
