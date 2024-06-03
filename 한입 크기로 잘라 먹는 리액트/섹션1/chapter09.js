// 1. if 조건문

let num = 4;

if (num >= 10) {
  console.log("10이상이에요");
} else if (num >= 5) {
  console.log("틀렸어");
} else {
  console.log("뭬");
}

// 2. switch 조건문

let animal = "bear";

switch (animal) {
  case "cat": {
    console.log("고먀미");
  }
  case "dog": {
    console.log("멈뭄미");
  }
  default: {
    console.log("ㅇㅅㅇ");
  }
}
