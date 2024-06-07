// async
// promise를 반환하는 함수로 바꿔줌

async function getData() {
  return {
    name: "햠",
    id: "haaaz",
  };
}

console.log(getData());

// 밑의 예시처럼 애초에 Promise를 반환하는 함수라면
// async는 별다른 동작을 하지 않고 그냥 프로미스 객체를 반환하도록 내버려둠

async function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "햠",
        id: "haaaz",
      });
    }, 1500);
  });
}

console.log(getData2());

// await

async function printData() {
  const data = await getData2();
  console.log(data);
}

printData();
