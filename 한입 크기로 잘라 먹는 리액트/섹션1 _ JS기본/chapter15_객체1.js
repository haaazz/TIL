// 1. 객체 생성
// 1.1 객체 생성자 사용

let obj = new Object();

// 1.2 객체 리터럴

let obj2 = {};

// 객체 속성 (객체 프로퍼티)
// key : value 쌍으로 정보를 구성함
let person = {
  nickname: "hazz",
  birthday: "980703",
  hobby: "bass",
};

// 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근
// 3.1.1 점 표기법
let nickname = person.nickname;
console.log(nickname); //hazz

let age = person.age;
console.log(age); // undefined

// 3.1.2 괄호 표기법
// 접근하고자 하는 key를 문자열 형태로 작성
let hobby = person["hobby"];
console.log(hobby);

// 동적으로 변수를 꺼내올 때는 괄호 표기법, 이외에는 문법적으로 간결한 점 표기법 사용 권장

// 3.2 새로운 프로퍼티를 추가하는 방법
// 수정의 경우 '변화시키고자 하는 것' = '변화한 값'

person.job = " stundet ";
person["favoriteIdol"] = "Ezreal of HEARTSTEEL";

// 3.3 프로퍼티를 삭제하는 방법
// delete 변수.프로퍼티

delete person.job;
delete person["birthday"];

// 프로퍼티의 존재 여부를 확인하는 방법 ( in 연산자 )
let result1 = "nickname" in person;
console.log(result1); // true
