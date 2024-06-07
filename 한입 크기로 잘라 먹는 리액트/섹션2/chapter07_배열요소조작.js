// 1. push 배열의 맨 뒤에 새로운 요소를 추가함

let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1); // 1, 2, 3, 4

// 콤마를 이용해 여러 개의 원소 한번에 추가 가능
arr1.push(5, 6, 7, 8);
console.log(arr1); // 1, 2, 3, 4, 5, 6, 7, 8

// push 메서드는 값이 추가된 배열의 길이를 반환함
const newLength = arr1.push(8);
console.log(newLength); // 9

// 2. pop 배열의 맨 뒤의 요소를 제거하고 반환함

let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(poppedItem); // 3
console.log(arr2); // 1, 2

// 3. shift 배열의 맨 앞의 요소를 제거하고 반환함

let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();

console.log(shiftedItem); // 1
console.log(arr3); // 2, 3

// 4. unshift 배열의 맨 앞에 요소를 추가함

let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(newLength2, arr4); //4, 0, 1, 2, 3

// 5. slice 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// 자르기 시작할 인덱스 ~ 잘라낼 범위의 끝의 인덱스 + 1
// 슬라이스 메서드의 두 번째 인수를 생략하면 자르기 시작한 부분부터 배열 끝까지 자름

let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(-3);
console.log(sliced); // 3, 4, 5
console.log(sliced2); // 3, 4, 5

// 6. concat 두 개의 서로 다른 배열을 이어붙여 새로운 배열을 반환

let arr6 = [1, 2];
let arr7 = [3, 4];

let concated = arr6.concat(arr7);
console.log(concated); // 1, 2, 3, 4
