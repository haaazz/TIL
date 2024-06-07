console.log(1);
console.log(3);
// 1
// 3

console.log(1);
// 3초를 세는 셋 타임 아웃 함수
setTimeout(() => {
  console.log(2);
}, 3000);
console.log(3);

// 1
// 3
// 2
