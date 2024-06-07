// 1. 대입 연산자

let var1 = 1;

// 2. 산술 연산자

let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

// 3. 복합 대입 연산자
// +=, -=, *=, /=, %= ...

// 4. 증감 연산자
let num6 = 10;
console.log(num6++); //후위 연산 10
console.log(++num6); //전위 연산 12

console.log(num6--); //12
console.log(--num6); //10

// 5. 논리 연산자

// 두 개 값 중에 하나만 true면 true
let or = true || false; //true

// 두 개 값 모두 true 여야 true
let and = true && false; //false

// 논리값 반전
let not = !true; //false

console.log(or, and, not);

// 6. 비교 연산자

let comp1 = 1 === 2; //false
// === 을 쓰는 이유는 자료형의 일치 여부까지 확인하기 때문
// == 만 쓰면 자료형이 달라도 값이 같으면 같다고 해버림
let comp2 = 1 !== 2; //true
console.log(comp1, comp2);

let comp3 = 2 > 1; // true
let comp4 = 2 < 1; // false
console.log(comp3, comp4);
