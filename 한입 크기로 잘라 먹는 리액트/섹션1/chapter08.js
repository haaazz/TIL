// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능
// null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
console.log(var4); //10

let var5 = var1 ?? var3;
console.log(var5); //20

// 둘 다 null 이나 undefined가 아니라면, 제일 앞의 값이 출력됨
let var6 = var2 ?? var3;
console.log(var6); //10

// 2. typeof 연산자
let var7 = 1;
var7 = "hello";

let to1 = typeof var7;
console.log(to1); //string

// 3. 삼항연산자
// 항을 세개 사용하고, 조건식을 이용해서 참, 거짓일 때의 값을 다르게 반환

let var8 = 10;

// 변수 = 조건식 ? "참일때의 값" : "거짓일때의 값";
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res); //짝수
