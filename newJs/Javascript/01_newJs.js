// Object shorthand assignment
let name = 'mg';
let age = 19;

// 객체에 있는 변수의 이름과 외부 변수의 이름이 같을 때
let person = {
    name,
    age,
};

console.log(person);

// Destructuring
let person1 = {
    name1: 'mg',
    age1: 11,
};

// let name1 = person1.name1;
// let age1 = person1.age1

// 객체 안에 있는 값을 가지고 오면서
// 변수를 만들어 대입한다.
let { name1, age1 } = person1;
console.log(name1, age1);

// 객체는 {}, 리스트는 []

let array = [1, 2, 3, 4];
let [a, b, ...rest] = array;
console.log(a, b, rest);

//spread
let person2 = { name2: 'mg', age2: 22 };
let person3 = { ...person2 };
let person4 = person2;
// person4는 person2 의 주소값을 가진다.
// person3은 값을 복사하는 것이다.
console.log(person3);

// 값을 복사 하면서 내용을 변경할 수 있다.
let person5 = { ...person2, name2: '감자' };
console.log(person5);

// 리스트에서도 사용할 수 있다.
let arrA = [1, 2];
let arrB = [...arrA, 3];
let arrC = [...arrA, ...arrB];
console.log(arrB);
console.log(arrC);

// 삼항연산자
console.log(person ? person.name : 'person없다');
