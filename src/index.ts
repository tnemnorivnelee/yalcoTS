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

// let age: number = 25;
// age = 26;

// const firstName: string = "Alice";
// // firstName = "Bob";

// var idOld: boolean = false;

// let score: number = 100;

// let studentNumber: string;
// studentNumber = "John";

// score = 95;
// // score = "95"; // 오류 발생

// let score2;

// score2 = 95; // 타입 추론으로 인해 number 타입으로 추론됨
// // score2 = "95"; // 오류 발생

// const firstName2 = "Alice";
// const greeting = "Hello";

// const age2 = 30;
// const message = `My name is ${firstName2} and I am ${age2} years old.`; // 템플릿 리터럴 사용
// console.log(message);

// const intNum = 42; // integer
// const floatNum = 3.14; // floating-point number
// const result = intNum / 0; // Infinity(type: number) = "계산 결과가 정상 범위를 벗어났음" 을 의미

// // const invalid = 'abc' * 3;

// console.log(result);

// let hexadecimalNumber = 0xf00d; // 0x 접두사는 16진수를 나타냅니다.
// let binaryNumber = 0b1010; // 0b 접두사는 2진수를 나타냅니다.
// let octalNumber = 0o744; // 0o 접두사는 8진수를 나타냅니다.

// console.log(hexadecimalNumber); // 61453
// console.log(binaryNumber); // 10
// console.log(octalNumber); // 484

// const isAdult: boolean = true;
// const hasPermission = false;

// if (isAdult && !hasPermission) {
//   console.log("Access denied.");
// } else {
//   console.log("Access granted.");
// }

// if (0) { // 0은 falsy 값이므로 이 블록은 실행되지 않습니다.
//   console.log("This will not be printed");
// }

// // ES2020부터 도입된 BigInt 타입
// // BigInt는 매우 큰 정수를 표현할 수 있는 타입입니다.
// const bigIntNumber = 1234567890123456789012345678901234567890n; // BigInt 타입
// const anotherBigInt = BigInt("1234567890123456789012345678901234567890"); // BigInt 생성자 사용

// console.log(bigIntNumber + anotherBigInt); // BigInt 타입 끼리만 연산이 가능합니다
// console.log(typeof bigIntNumber); // "bigint"


/* ------------------------------------------------------------------------ */


// // 10. any 타입과 unknown 타입

// // any: 모르니까 신경 끄는 느낌 (안쓰는게 좋음)
// // 어떤 타입이 오더라도 컴파일 단계에서 오류로 잡히지 않습니다.
// let anyValue: any = 10; // number 타입으로 초기화
// anyValue = "Hello"; // any 타입은 어떤 값이든 할당 가능
// anyValue = true; // boolean도 할당 가능
// anyValue = [1, 2, 3]; // 배열도 할당 가능
// anyValue = { key: "value" }; // 객체도 할당 가능

// let anyString: string = "Hello, TypeScript!";

// console.log(anyString.toUpperCase()); // any 타입은 런타임 오류를 발생시킬 수 있음
// // console.log(anyString.noExistentMethod()); // 존재하지 않는 메서드를 호출하면 런타임 오류 발생

// // any 는 외부 라이브러리를 사용하거나, 네트워크에서 데이터를 받아오는 등 데이터의 타입을 미리 알 수 없는 경우에만 사용. 안전 장치를 잠시 꺼두는 용도로 사용.
// function processData(data: any) {
//   return data.someProperty?.someMethod?.() || data;
// }

// // unknown: 모르니까 신경 쓰는 느낌
// let anyVar: any = 10;
// let unknownVar: unknown = 10;

// let anyNumber: number = anyVar;
// anyVar.toFixed(2);

// // let unknownNumber: number = unknownVar; // 에러 발생: Type 'unknown' is not assignable to type 'number'.
// // unknownNumber.toFixed(2);

// // unknown 타입은 어떤 값이든 할당할 수 있지만, 그 값을 사용하기 전에 타입 검사를 해야 합니다.
// function processValue(val: unknown): string {
//   if (typeof val === "string") {
//     return val.toUpperCase(); // val이 string 타입일 때만 메서드 호출
//   }

//   if (typeof val === "number") {
//     return val.toFixed(2); // val이 number 타입일 때만 메서드 호출
//   }

//   return String(val); // 그 외의 경우
// }

// console.log(processData("Hello")); // "Hello"
// console.log(processValue(42)); // "42.00"
// console.log(processValue(true)); // "true" -> type : string

// // 타입 단언
// let unknownValue: unknown = "Hello, TypeScript!";

// // Type Assertion - 해당 타입을 확신할 때 사용
// // unknownValue는 unknown 타입이지만, string으로 단언합니다.
// let stringLength = (unknownValue as string).length;

// // Type Guard - 런타임에 타입을 확인하고 안전하게 사용
// // 해당 방법이 unknown 을 사용하는데 더 안전합니다.
// if (typeof unknownValue === "string") {
//   stringLength = unknownValue.length; // 타입 검사를 통해 안전하게 사용
// }


// function processUserData(user: unknown): string {
//   // 타입 가드를 사용하여 user가 객체인지 확인
//   if (typeof user === "object" && user !== null) {
//     // user가 객체인 경우, name 속성이 있는지 확인
//     if ('name' in user && typeof (user as any).name === 'string') {
//       // name 속성이 문자열인 경우, 대문자로 변환하여 반환
//       return (user as any).name.toUpperCase();
//     }
//   }
//   return "Invalid user data";
// }

// console.log(processUserData({ name: "Alice" })); // "ALICE"

/* ------------------------------------------------------------------------ */

// 11. null, undefined, void, never 타입들

// null: 의도적으로 값이 없음을 나타내는 타입입니다.
// undefined: 변수나 속성이 초기화되지 않았음을 나타내는 타입입니다.

let nullValue: null = null;
let undefinedValue: undefined = undefined;

// Error with strictNullChecks
let stringValue: string = null;
let numberValue: number = undefined;


let optionalString: string | null = "Hello, TypeScript!";
optionalString = null; // null 할당 가능

let potentialUndefiendNumber: number | undefined = undefined;
console.log(potentialUndefiendNumber); // undefined 출력




// void: 함수가 값을 반환하지 않을 때 사용되는 타입입니다.
// never: 함수가 절대 반환하지 않거나, 항상 예외를 던지는 경우에 사용되는 타입입니다.
function printLength(text: string | null): void {
  if (text == null) {
    console.log("No text provided.");
    return; // void 함수는 값을 반환하지 않음
  }

  // Now TypeScript knows 'text' is a string
  // 위에서 null 체크를 했기 때문에 text는 string 타입으로 추론됩니다.
  // 만약 if 문을 사용하지 않았다면, text는 string | null 타입으로 추론되어 오류가 발생합니다.
  console.log(`Length of the text: ${text.length}`);
  // return 1; // Error
}

printLength(null);
printLength("Hello, TypeScript!");


const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num: number): void => {
  console.log(num * 2);
});



// never 타입은 함수가 절대 반환하지 않거나, 항상 예외를 던지는 경우에 사용됩니다.
// 때문에 이 함수는 정상적으로 종료되지 않고, 값을 반환하는 과정에 도달하지 못합니다.
// 이처럼 특정 오류를 던지는 용도의 함수에는 반환값 타입으로 never를 사용합니다.
function throwError(message: string): never {
  throw new Error(message); // 이 함수는 절대 반환하지 않음
}



let i = 0;

function infiniteLoop(): never {
  while (true) {
    i++;
  }
}



function handleValue(x: string | number | boolean): void {
  // Type narrowing using typeof
  if (typeof x === "string") {
    console.log(`String value: ${x.toUpperCase()}`); // 문자열을 대문자로 변환하여 출력
  } else if (typeof x === "number") {
    console.log(`Number value: ${x.toFixed(2)}`); // 숫자를 소수점 둘째 자리까지 출력
  } else if (typeof x === "boolean") {
    console.log(`Boolean value: ${x ? "true" : "false"}`); // 불리언 값을 문자열로 출력
  } else {
    const unreachable: never = x;
    throw new Error(`Unexpected value: ${x}`);
  }
}
handleValue({ name: "Alice" }); // Error: Unexpected value: [object Object]



/* ------------------------------------------------------------------------ */

