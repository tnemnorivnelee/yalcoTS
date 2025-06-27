// 8. 타입스크립트 설치하고 사용해보기

// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }

// console.log(greet("World"));


/* ------------------------------------------------------------------------ */


/* 
9. 기본 타입들

let, const, var의 차이점
1. let(변수): 블록 스코프를 가지며, 재선언이 불가능하고 재할당이 가능합니다.
2. const(상수): 블록 스코프를 가지며, 재선언과 재할당이 불가능합니다.
3. var: 함수 스코프를 가지며, 재선언과 재할당이 가능합니다.
   - var는 호이스팅(hoisting)되어 선언 전에 접근할 수 있지만, 초기화는 선언 이후에 이루어집니다.  
*/

let age: number = 25;
age = 26;

const firstName: string = "Alice";
// firstName = "Bob";

var idOld: boolean = false;

let score: number = 100;

let studentNumber: string;
studentNumber = "John";

score = 95;
// score = "95"; // 오류 발생

let score2;

score2 = 95; // 타입 추론으로 인해 number 타입으로 추론됨
// score2 = "95"; // 오류 발생

const firstName2 = "Alice";
const greeting = "Hello";

const age2 = 30;
const message = `My name is ${firstName2} and I am ${age2} years old.`; // 템플릿 리터럴 사용
console.log(message);

const intNum = 42; // integer
const floatNum = 3.14; // floating-point number
const result = intNum / 0; // Infinity(type: number) = "계산 결과가 정상 범위를 벗어났음" 을 의미

// const invalid = 'abc' * 3;

console.log(result);

let hexadecimalNumber = 0xf00d; // 0x 접두사는 16진수를 나타냅니다.
let binaryNumber = 0b1010; // 0b 접두사는 2진수를 나타냅니다.
let octalNumber = 0o744; // 0o 접두사는 8진수를 나타냅니다.

console.log(hexadecimalNumber); // 61453
console.log(binaryNumber); // 10
console.log(octalNumber); // 484

const isAdult: boolean = true;
const hasPermission = false;

if (isAdult && !hasPermission) {
  console.log("Access denied.");
} else {
  console.log("Access granted.");
}

if (0) { // 0은 falsy 값이므로 이 블록은 실행되지 않습니다.
  console.log("This will not be printed");
}

// ES2020부터 도입된 BigInt 타입
// BigInt는 매우 큰 정수를 표현할 수 있는 타입입니다.
const bigIntNumber = 1234567890123456789012345678901234567890n; // BigInt 타입
const anotherBigInt = BigInt("1234567890123456789012345678901234567890"); // BigInt 생성자 사용

console.log(bigIntNumber + anotherBigInt); // BigInt 타입 끼리만 연산이 가능합니다
console.log(typeof bigIntNumber); // "bigint"


/* ------------------------------------------------------------------------ */
