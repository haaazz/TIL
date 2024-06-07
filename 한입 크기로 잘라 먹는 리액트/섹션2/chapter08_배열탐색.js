// 1. forEach

let arr1 = [1, 2, 3];

arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
}); // 0 2 / 1 4 / 2 6

let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr); // [2, 4, 6]

// 2. includes 배열에 특정 요소가 있는지 확인함

let arr2 = [1, 2, 3];
let included = arr2.includes(3);
let included2 = arr2.includes(10);
console.log(included); // true
console.log(included2); // false

// 3. indexOf 특정 요소의 인덱스를 찾아서 반환하는 메서드

let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index); // 1

// 4. findIndex 모든 요소를 순회하며 콜백 함수를 만족하는 특정 요소의 인덱스를 반환하는 인덱스

let arr4 = [1, 2, 3];
const finded = arr4.findIndex((item) => {
  if (item === 2) return true;
});

console.log(finded); // 1

// 5. find 모든 요소를 순회하며 콜백함수를 만족하는 요소를 찾고 그대로 반환

let arr5 = [{ name: "이훈" }, { name: "펭귄" }];

const findedValue = arr5.find((item) => item.name === "펭귄");

console.log(findedValue); // {name: '펭귄'}
