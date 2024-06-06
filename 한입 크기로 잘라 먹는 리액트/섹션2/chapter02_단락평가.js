function returnFalse() {
  console.log("False함수"); // 출력됨
  return false;
}

function returnTrue() {
  console.log("True함수"); // 출력되지 않음
  return true;
}

console.log(returnFalse() && returnTrue()); // False

// 단락 평가 활용 사례

function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printName({ name: "햠" });
