function funcA() {
  console.log("A");
}

// 자바스크립트는 함수 자체를 변수에 담아줄 수 있음
let varA = funcA;
varA();

//varB같은 경우에는 함수의 선언식이 아니니 함수 이름으로 호출할 수 없음
let varB = function funcB() {
  console.log("B");
};

// 따라서 함수 이름을 생략할 수 있는데, 이를 '익명함수'라고 함
let varC = function () {
  console.log("C");
};

// -> 함수 표현식 -> 호이스팅의 대상이 아님

// ------------- 화살표 함수

let varD = () => {
  return 1;
};

// let varD = () => 1; 로 요약 가능

console.log(VarD);

// 값 설정도 가능

let varE = (value) => value + 1;

console.log(varE(10));
