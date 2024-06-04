function main(value) {
  console.log(value);
}

function sub() {
  console.log(" subsub ");
}

main(sub);

////////////////////////

// 이렇듯 불러올때 아예 인자로 콜백 함수 자체를 써도 됨
main(function sub() {
  console.log(" subsub ");
});

// 화살표 함수로 줄이기도 가능함
main(() => {
  console.log(" subsub ");
});

///////////////////////////

function repeat(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx);
  }
}

function repeatDouble(count) {
  for (let idx = 1; idx <= count; idx++) {
    console.log(idx * 2);
  }
}

repeat(5); // 1 / 2 / 3 / 4 / 5
repeatDouble(5); // 2 / 4 / 6 / 8 / 10

// 위의 방식은 너무너무 중복 코드가 많고 비효율적임 -> 콜백 함수를 이용

function repeat2(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat2(5, function (idx) {
  console.log(idx);
});

repeat2(5, function (idx) {
  console.log(idx * 2);
});

repeat2(5, (idx) => {
  console.log(idx * 3);
});
