// 1. filter 기존 배열에서 조건을 만족하는 요소들을 필터링하여 새로운 요소로 반환

let arr1 = [
  { name: "펭귄", hobby: "발로란트" },
  { name: "햐미", hobby: "발로란트" },
  { name: "삼촌", hobby: "이터널리턴" },
];

const valorant = arr1.filter((item) => {
  if (item.hobby === "발로란트") return true;
  //filter((item) => item.hobby === "발로란트")로 축약 가능
});

console.log(valorant);
// 0: {name: '펭귄', hobby: '발로란트'}
// 1: {name: '햐미', hobby: '발로란트'}

// 2. map 배열의 모든 요소를 순회하며 각각 콜백 함수를 실행하고 그 결과값으로 새로운 배열 반환

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  return item * 2;
});

console.log(mapResult1); // [2, 4, 6]

let names = arr1.map((item) => item.name);
console.log(names); // ['펭귄', '햐미', '삼촌']

// 3. sort 배열을 사전순으로 정렬

let arr3 = ["b", "c", "a"];
arr3.sort();
console.log(arr3); // ['a', 'b', 'c']

let arr4 = [10, 21, 3];
arr4.sort((a, b) => {
  if (a > b) {
    // b가 a 앞에 와라
    return 1; // sort함수에서 양수를 반환하게 되면 둘 중 더 작은 값을 앞에 두겠다는 뜻
  } else if (a < b) {
    // a가 b 앞에 와라
    return -1;
  } else {
    // 두 값이 같으면 두 값의 자리를 바꾸지 마라
    return 0;
  }
});
console.log(arr4); // [3, 10, 21]

// 4. toSorted sort와 기능은 같지만 원본 배열을 변형하지 않음

let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5, sorted); // ['c', 'a', 'b'] ['a', 'b', 'c']

// 5. join 배열의 모든 요소를 하나의 문자열로 합쳐서 반환함

let arr6 = ["hi", "im", "haaaaaz"];
const joined = arr6.join();
const joined2 = arr6.join(" ");
console.log(joined); // hi,im,haaaaaz
console.log(joined2); // hi im haaaaaz
