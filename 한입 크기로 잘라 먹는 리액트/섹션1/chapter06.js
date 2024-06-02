// 묵시적 형 변환

let num = 10;
let str = "20";

const result = num + str;
console.log(result); //1020

// 명시적 형 변환

let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1); //20

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(strToNum2); //10
// 문자가 앞에 있는 경우 ex slfkjwldkfnlkcsxmsl10개 -> 형 변환 잘 이뤄지지 않음

let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1 + "입니당"); //20입니다
