// 1. 상수 객체
// 상수에 저장해둔 객체

const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 상수의 선언 시 저장된 값 변경 불가능하여
//  animal = { a: 1}; 와 같은 방식으로 값을 추가하려하면  TypeError가 뜸

// but 객체의 새 프로퍼티 추가, 프로퍼티 수정, 프로퍼티 삭제는 가능함
animal.age = 2.7;
animal.name = "쿠키";
delete animal.color;

console.log(animal);

// 상수란 엄밀히 말하면 새 값을 할당하지 못하는 것
// 이미 저장되어있는 객체 내부 정보를 건드리는 것은 가능하기에 위와 같은 일이 가능함

// 2. 메서드 -> 값이 함수인 프로퍼티

const person = {
  name: "hazz",
  sayHi: function () {
    console.log("ㅎㅇ!");
  },
};

person.sayHi(); // ㅎㅇ!
