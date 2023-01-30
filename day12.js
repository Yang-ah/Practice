// 오늘의 과제
// 1. 객체를 선언 (value의 데이터 타입 : string, number, boolean, null, undefined, object, array, function)
// 2. 함수 : 객체의 value의 데이터 타입이 number인 [key, value]만 뽑아서 새로운 객체 return (reduce 사용)

const cat = {
  name: "kiity",
  age: 2,
  adopted: true,
  weight: 4,
  height: null,
  color: undefined,
  birthDate: new Date(),
  favoriteFood: ["Churu", "tuna", "apple", "chicken"],
  grooming: () => console.log("kitty is grooming"),
};

let catNum = {};

// forEach 활용
Object.entries(cat).forEach(([key, value]) => {
  if (typeof value === "number") {
    catNum[key] = value;
  }
});

console.log(catNum);

// reduce 활용
let catNum2 = {};

Object.entries(cat).reduce((acc, [key, value]) => {
  if (typeof value === "number") {
    catNum2[key] = value;
  }
});

console.log(catNum2);
