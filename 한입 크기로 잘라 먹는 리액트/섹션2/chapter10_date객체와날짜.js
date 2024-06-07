// 1. date 객체를 생성하는 방법

let date1 = new Date(); // 생성자
console.log(date1); // Fri Jun 07 2024 23:12:06 GMT+0900 (한국 표준시)

// 특정 날짜나 특정 시간을 기준으로 생성하고 싶다면

let date2 = new Date("1998-07-03"); // 대시가 아닌 점과 띄어쓰기, 슬래시로도 됨
console.log(date2); // Fri Jul 03 1998 09:00:00 GMT+0900 (한국 표준시)

let date3 = new Date("1998/07/03/10:10:10"); // 대시가 아닌 점과 띄어쓰기, 슬래시로도 됨
console.log(date3); // Fri Jul 03 1998 10:10:10 GMT+0900 (한국 표준시)

// 2. 타임 스탬프
// 특정 시간이 "1970.01.01 00시 00분 00초 (협정 세계시 UTC)" 로부터 몇 ms가 지났는지 의미하는 '숫자값'

let ts1 = date1.getTime();
console.log(ts1); // 1717769964305

// date1과 동일한 시간이 적용됨
let date4 = new Date(ts1);
console.log(date1, date4);
// Fri Jun 07 2024 23:20:39 GMT+0900 (한국 표준시) Fri Jun 07 2024 23:20:39 GMT+0900 (한국 표준시)

// 3. 시간 요소들을 추출하는 방법

let year = date1.getFullYear();
let month = date1.getMonth();
let date = date1.getDate();

let hour = date1.getHours();
let minutes = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(year, month, date, hour, minutes, seconds); // 2024 5 7 23 24 10
// 자바스크립트에서 month는 0부터 시작해서 항상 +1을 해줘야 실제 값이 나옴

// 4. 시간 수정하기

date1.setFullYear(1998);
date1.setMonth(6);
date1.setDate(3);

console.log(date1); // Fri Jul 03 1998 23:26:15 GMT+0900 (한국 표준시)

// 5. 시간 여러 포맷으로 출력하기

//  날짜만 출력하기
console.log(date1.toDateString()); // Fri Jul 03 1998
// 현지화된 포맷으로 날짜와 시간 출력
console.log(date1.toLocaleString()); // 1998. 7. 3. 오후 11:29:23
