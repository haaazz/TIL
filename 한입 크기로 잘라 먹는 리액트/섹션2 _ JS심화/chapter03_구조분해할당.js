// 1. 배열의 구조 분해 할당

let arr = [1, 2, 3];

// 지금까지 해왔던 불편한 방법
let a = arr[0];
let b = arr[1];
let c = arr[2];

// 구조 분해 할당
let [one, two, three] = arr;
// four라는 변수 초과 할당하면 undefined가 나오고, four = 4로 default값 같이 넣어줄 수도 있음

// 2. 객체의 구조 분해 할당

let person = {
  nickname: "햠",
  age: 27,
  hobby: "베이스",
};

let { nickname, age, hobby } = person;

// 3. 객체 구조 분해 할당을 이용해 함수의 매개변수를 받는 방법
// 객체를 넘겼을 때에만 사용 가능함
const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};

func(person);
