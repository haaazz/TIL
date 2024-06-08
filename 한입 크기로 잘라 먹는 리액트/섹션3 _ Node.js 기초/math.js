// // math 모듈 -> 다른 모듈에서 불러와 사용할 수 있음

// function add(a, b) {
//   return a + b;
// }

// function sub(a, b) {
//   return a - b;
// }

// // 값 내보내기
// //add : add같이 key : value 똑같을 경우 한쪽을 생략해도 됨
// // module.exports = {
// //   add: add,
// //   sub,
// // };

// export { add, sub };

export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// 기본값 -> import시에 이름 마음대로 설정 가능, 중괄호 아닌 단독 import 필요
// ex ) import mul, { add, sub } from "./math.js"
export default function multiply(a, b) {
  return a * b;
}
