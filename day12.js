// 오늘의 과제
// 1. 객체를 선언 (value의 데이터 타입 : string, number, boolean, null, undefined, object, array, function)
// 2. 함수 : 객체의 value의 데이터 타입이 number인 [key, value]만 뽑아서 새로운 객체 return (reduce 사용)

const cat = {
  name: "kitty",
  age: 2,
  adopted: true,
  weight: 4,
  height: null,
  color: undefined,
  birthDate: new Date(),
  favoriteFood: ["Churu", "tuna", "apple", "chicken"],
  grooming: () => console.log("kitty is grooming"),
};

// reduce 활용

const result = Object.entries(cat).reduce((acc, [key, value]) => {
  if (typeof value === "number") {
    acc[key] = value;
  }
  return acc;
}, {});

console.log(result);
