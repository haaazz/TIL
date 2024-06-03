// 함수 선언

function greeting() {
  console.log("ㅎㅇ");
}

greeting();

function getArea(x, y) {
  function another() {
    console.log("윙");
  }
  another();
  let area = x * y;

  console.log(area);

  return area;
}

getArea(30, 4);

let aarea = getArea(10, 20);
