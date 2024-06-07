// 생성자 사용, 인자로 비동기 작업을 진행할 callback함수를 넣음
const promise = new Promise(() => {
  // 비동기 작업을 실행하는 함수, executor

  setTimeout(() => {
    console.log("welcome to my world");
  }, 2000);
});

console.log(promise);

//promise {<pending>}
// welcome to my world -> 약 2초 뒤 실행됨

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("welcome to my world2");
    // resolve("good"); // 여기를 비워두면 undefined가 남
    reject("error");
  }, 2000);
});

setTimeout(() => {
  console.log(promise2);
}, 3500);

// promise {<pending>}
// welcome to my world
// welcome to my world2
// promise {<fulfilled>: undefined}

// chapter13_Promise.js:19 Uncaught (in promise) error
// (anonymous) @ chapter13_Promise.js:19
// setTimeout (async)
// (anonymous) @ chapter13_Promise.js:16
// (anonymous) @ chapter13_Promise.js:15Understand this error
// chapter13_Promise.js:24 Promise {<rejected>: 'error'}

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // const num = 10;
    const num = null;

    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num 숫자 아님");
    }
  }, 2000);
});

// then 메서드

promise3
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

// promise3.catch((err) => {
//   console.log(err);
// });

function add10(num) {
  const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num 숫자 아님");
      }
    }, 2000);
  });
  return promise5;
}

const p = add10(0);
p.then((result) => {
  console.log(result); // 10
  const newP = add10(result);
  newP.then((result) => {
    console.log(result); // 20
  });
});
