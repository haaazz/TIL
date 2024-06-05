// 1. 배열 생성
// 1.1 배열 생성자
let arrA = new Array();
// 1.2 배열 리터럴 (더 간단해서 많이 사용함)
let arrB = [];
// 1.3 바로 값 할당
let arrC = [1, 2, 3, true, "hello js!", null, undefined, () => {}, {}, []];

// 2. 배열 원소 접근
// 요소의 index로 접근 가능

let item1 = arrC[0];
let item2 = arrC[1];

// 배열 특정 인덱스 요소 수정 가능
arrC[0] = "change";

console.log(it1, item2);
