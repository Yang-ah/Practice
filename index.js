// 과제 : github repository에 올리기

// 1. arr 선언 (1~100까지) - for문이나 push 사용
// 2. arr에서 짝수만 걸러서 출력  - filter 사용
// 3. arr에서 26의 index 값 출력  - findIndex 사용
// 4. arr의 마지막에 200 추가하기 - push 사용

let arr = [];

for (let i = 1; i <= 100; i++) {
  arr.push(i);
}

// [1~100] 출력
console.log(arr);

// 짝수만 출력
const filteredArr = arr.filter((item) => item % 2 === 0);
console.log(filteredArr);

// 26의 index 출력
const PrintArr = arr.findIndex((item) => item === 26);
console.log(PrintArr);

// arr 마지막에 200 추가해서 출력
const AddItem = arr.push(200);
console.log(arr.at(-1));
