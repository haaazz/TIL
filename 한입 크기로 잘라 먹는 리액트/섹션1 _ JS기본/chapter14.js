let a = 1; // 전역 스코프

function funA() {
  let b = 2; //지역 스코프
  console.log(a); // 1 -> 전역 스코프를 불러왔기에 정상적으로 출력됨
}

funA();
console.log(b); // 지역 스코프를 지역 밖에서 호출하고 있음 -> Not defined 에러 발생

// 변수 c처럼 블럭 내의 변수는 전부 지역 스코프를 가짐
if (ture) {
  let c = 1;
}

// 반복문 속의 변수 d도 마찬가지로 지역 스코프를 가짐
for (let i = 0; i < 10; i++) {
  let d = 1;
}

console.log(c);
console.log(d);
