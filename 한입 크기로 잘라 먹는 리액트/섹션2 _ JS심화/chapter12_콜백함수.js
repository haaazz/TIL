function task() {
  setTimeout(() => {
    console.log("너만 알고있어 내꺼 하는 법");
  }, 5000);
}
task();

function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
    console.log(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황

function orderFood(callback) {
  setTimeout(() => {
    const food = "떡볶이";
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동 ${food}`;
    callback(freezedFood);
  }, 1500);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (freezedFood) => {
      console.log(freezedFood);
    });
  });
});

// 3
// 3
// 떡볶이
// 너만 알고있어 내꺼 하는 법
// 식은 떡볶이
// 냉동 식은 떡볶이
