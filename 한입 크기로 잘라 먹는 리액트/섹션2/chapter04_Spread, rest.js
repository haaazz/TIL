// 1. 스프레드 연산자
// 객체나 배열에 저장된 여러 값을 개별로 흩뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [4, ...arr1, 5, 6];

// 2. rest 매개변수
// 여러 개의 값을 배열 형태로 한 번에 받아올 수 있게 해줌

function funcB(one, ...rest) {
  console.log(rest);
}

funcB(...arr1);
