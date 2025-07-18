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

// // 11. null, undefined, void, never 타입들

// // null: 의도적으로 값이 없음을 나타내는 타입입니다.
// // undefined: 변수나 속성이 초기화되지 않았음을 나타내는 타입입니다.

// let nullValue: null = null;
// let undefinedValue: undefined = undefined;

// // Error with strictNullChecks
// let stringValue: string = null;
// let numberValue: number = undefined;


// let optionalString: string | null = "Hello, TypeScript!";
// optionalString = null; // null 할당 가능

// let potentialUndefiendNumber: number | undefined = undefined;
// console.log(potentialUndefiendNumber); // undefined 출력




// // void: 함수가 값을 반환하지 않을 때 사용되는 타입입니다.
// // never: 함수가 절대 반환하지 않거나, 항상 예외를 던지는 경우에 사용되는 타입입니다.
// function printLength(text: string | null): void {
//   if (text == null) {
//     console.log("No text provided.");
//     return; // void 함수는 값을 반환하지 않음
//   }

//   // Now TypeScript knows 'text' is a string
//   // 위에서 null 체크를 했기 때문에 text는 string 타입으로 추론됩니다.
//   // 만약 if 문을 사용하지 않았다면, text는 string | null 타입으로 추론되어 오류가 발생합니다.
//   console.log(`Length of the text: ${text.length}`);
//   // return 1; // Error
// }

// printLength(null);
// printLength("Hello, TypeScript!");


// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach((num: number): void => {
//   console.log(num * 2);
// });



// // never 타입은 함수가 절대 반환하지 않거나, 항상 예외를 던지는 경우에 사용됩니다.
// // 때문에 이 함수는 정상적으로 종료되지 않고, 값을 반환하는 과정에 도달하지 못합니다.
// // 이처럼 특정 오류를 던지는 용도의 함수에는 반환값 타입으로 never를 사용합니다.
// function throwError(message: string): never {
//   throw new Error(message); // 이 함수는 절대 반환하지 않음
// }



// let i = 0;

// function infiniteLoop(): never {
//   while (true) {
//     i++;
//   }
// }



// function handleValue(x: string | number | boolean): void {
//   // Type narrowing using typeof
//   if (typeof x === "string") {
//     console.log(`String value: ${x.toUpperCase()}`); // 문자열을 대문자로 변환하여 출력
//   } else if (typeof x === "number") {
//     console.log(`Number value: ${x.toFixed(2)}`); // 숫자를 소수점 둘째 자리까지 출력
//   } else if (typeof x === "boolean") {
//     console.log(`Boolean value: ${x ? "true" : "false"}`); // 불리언 값을 문자열로 출력
//   } else {
//     const unreachable: never = x;
//     throw new Error(`Unexpected value: ${x}`);
//   }
// }
// handleValue({ name: "Alice" }); // Error: Unexpected value: [object Object]




/* ------------------------------------------------------------------------ */



// 12. 배열과 튜플, 객체 기초

// let numbers: number[] = [1, 2, 3, 4, 5]; // 숫자 배열

// let fruits: Array<string> = ["apple", "banana", "cherry"]; // 문자열 배열

// let scores: number[] = [];
// scores.push(100); // 배열에 값 추가
// scores.push(95, 85); // 여러 값 추가

// // scores.push("A"); // 오류 발생: Type 'string' is not assignable to type 'number'.

// // 타입스크립트는 타입 추론을 통해 배열의 타입을 자동으로 결정합니다.
// let colors = ["red", "green", "blue"]; // 문자열 배열
// // colors.push(123); // 오류 발생: Type 'number' is not assignable to type 'string'.

// console.log(numbers[0], fruits[1], colors[2]); // 1 banana blue






// let matrix: number[][] = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// console.log(matrix[1][2]); // 6


// let cube: number[][][] = [
//   [
//     [1, 2],
//     [3, 4]
//   ],
//   [
//     [5, 6],
//     [7, 8]
//   ]
// ];

// console.log(cube[0][1][0]); // 3





// const names: string[] = ["Alice", "Bob", "Charlie"];

// // find 메서드는 배열에서 조건에 맞는 첫 번째 요소를 찾습니다.
// // B 로 시작하는 이름이 없을 수도 있으므로, optional chaining을 사용합니다.
// // 만약 B로 시작하는 이름이 없다면 undefined가 반환됩니다.
// // 만약 B로 시작하는 이름이 있다면, 그 이름이 반환됩니다.
// const foundName: string | undefined = names.find(name => name.startsWith("B"));
// console.log(foundName); // "Bob"



// // 읽기 전용 배열
// // 사용할 수는 있지만 수정할 수 없는 배열
// const originalArray: number[] = [1, 2, 3, 4, 5];
// originalArray[0] = 10; // 수정 가능

// const readOnlyNumbers: ReadonlyArray<number> = originalArray;

// const readOnlyScores: readonly number[] = [90, 85, 95];

// // readOnlyNumbers[0] = 20; // 오류 발생: Index signature in type 'readonly number[]' only permits reading
// // readOnlyScores.push(100); // 오류 발생: Property 'push' does not exist on type 'readonly number[]'.


// const newArray = [...readOnlyNumbers, 6]; // [1, 2, 3, 4, 5, 6] - 새로운 배열 생성

// newArray[0] = 0; // 새로운 배열은 수정 가능
// newArray.push(7); // 새로운 배열에 값 추가 가능

// console.log(newArray); // [0, 2, 3, 4, 5, 6, 7]






// // 튜플: 고정된 길이와 타입을 가지는 배열
// // 지정석이 있는 열차 칸과 같음.
// let person: [string, number] = ["Alice", 30]; // 문자열과 숫자를 가지는 튜플
// console.log(person[0]); // "Alice"
// console.log(person[1]); // 30

// // person = [30, "Alice"]; // 타입은 맞지만 순서가 다르면 오류 발생

// // person = ["Bob", 25, true]; // // 오류 발생: Type '[string, number, boolean]' is not assignable to type '[string, number]'.

// const [firstName, age] = person;
// console.log(firstName); // "Alice"
// console.log(age); // 30

// type OptionalTuple = [string, number, boolean?]; // 마지막 요소는 선택적
// const complete: OptionalTuple = ["Jane", 25, true]; // 모든 요소가 있음
// const partial: OptionalTuple = ["John", 30]; // 마지막 요소가 없음








// // 타입 추론에 있어서 배열과 튜플의 차이
// // 배열은 요소의 타입이 동일해야 하며, 길이가 가변적입니다.
// // 튜플은 요소의 타입이 다를 수 있으며, 길이가 고정되어 있습니다.
// const inferredArray = [1, "hello"];
// // inferredArray: (string | number)[] - 요소의 타입이 string과 number로 추론됨

// // as const를 사용하여 튜플로 추론할 수 있습니다.
// const inferredTuple = [1, "hello"] as const;
// // inferredTuple: readonly [1, "hello"] - 요소의 타입이 고정되어 추론됨

// // inferredTuple[0] = 2; // 오류 발생: Cannot assign to '0' because it is a read-only property
// // inferredTuple[1] = 'world'; // 오류 발생: Cannot assign to '1' because it is a read-only property

// let explicitTuple: [number, string] = [1, "hello"];
// explicitTuple = [2, "world"]; // 타입이 맞으면 수정 가능






// // 객체: 키와 값의 쌍으로 이루어진 데이터 구조
// const personObject: { name: string; age: number; } = {
//   name: "Alice",
//   age: 30
// };

// personObject.name = "Bob"; // 수정 가능
// personObject.age = 25; // 수정 가능
// // personObject.address = "123 Main St"; // 오류 발생: Property 'address' does not exist on type '{ name: string; age: number; }'.






// // 인터페이스
// // 인터페이스는 객체의 구조를 정의하는데 사용됩니다.
// interface User {
//   id: number;
//   username: string;
//   isAdmin: boolean;
// }

// const adminUsere: User = {
//   id: 0,
//   username: "admin",
//   isAdmin: true
// };

// // 오류 발생: Property 'isAdmin' is missing in type '{ id: number; username: string; }' but required in type 'User'.
// // const user1: User = {
// //   id: 1,
// //   username: "admin",
// // };

// // const user2: User = {
// //   id: "2", // 오류 발생: Type 'string' is not assignable to type 'number'.
// //   username: "admin",
// //   isAdmin: false,
// // }




/* ------------------------------------------------------------------------ */



// 13. 열거형

// // 열거형(Enums)은 관련된 상수들의 집합을 정의하는데 사용됩니다.
// const USER_ROLE_ADMIN = 0;
// const USER_ROLE_MANAGER = 1;
// const USER_ROLE_EMPLOYEE = 2;
// const USER_ROLE_GUEST = 3;

// function checkUserAccess(userRole: number): boolean {
//   if (userRole === USER_ROLE_ADMIN || userRole === USER_ROLE_MANAGER) {
//     return true; // 관리자나 매니저는 접근 허용
//   }
//   return false; // 그 외의 역할은 접근 거부
// }


// console.log(checkUserAccess(USER_ROLE_ADMIN)); // true
// console.log(checkUserAccess(2)); // false
// console.log(checkUserAccess(99)); // IDE 에서 에러 발생하지 않음




// enum UserRole {
//   Admin = 0,
//   Manager = 1,
//   Employee = 2,
//   Guest = 3
// }


// function checkUserAccessEnum(userRole: UserRole): boolean {
//   if (userRole === UserRole.Admin || userRole === UserRole.Manager) {
//     return true; // 관리자나 매니저는 접근 허용
//   }
//   return false; // 그 외의 역할은 접근 거부
// }

// console.log(checkUserAccessEnum(UserRole.Admin)); // true
// console.log(checkUserAccessEnum(3));
// // console.log(checkUserAccessEnum(99)); // Error: Argument of type '99' is not assignable to parameter of type 'UserRole'.





// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// console.log(Direction.Up); // 0
// console.log(Direction.Down); // 1
// console.log(Direction.Left); // 2
// console.log(Direction.Right); // 3

// console.log(Direction[0]); // "Up"
// console.log(Direction[1]); // "Down"
// console.log(Direction[2]); // "Left"
// console.log(Direction[3]); // "Right"




// enum HttpStatus {
//   OK = 200,
//   Created = 201,
//   NoContent = 204,
//   BadRequest = 400,
//   Unauthorized = 401,
//   Forbidden = 403,
//   NotFound = 404,
//   InternalServerError = 500
// }

// const status1: HttpStatus = HttpStatus.OK;
// const status2: HttpStatus = 201;
// // const status3: HttpStatus = 203; // Error: Type '203' is not assignable to type 'HttpStatus'.

// console.log(status1); // 200
// console.log(status2); // 201




// enum Priority {
//   Low = 5,
//   Medium,
//   High = 10,
//   Critical
// }

// console.log(Priority.Low); // 5
// console.log(Priority.Medium); // 6
// console.log(Priority.High); // 10
// console.log(Priority.Critical); // 11





// enum Theme {
//   Light = "light-theme",
//   Dark = "dark-theme",
//   System = "system-theme"
// }

// function applyTheme(theme: Theme): void {
//   const className = theme;
//   console.log(`Applying theme: ${className}`);
// }

// applyTheme(Theme.Light); // "Applying theme: light-theme"
// // applyTheme("light-theme"); //  X // Error: Argument of type '"light-theme"' is not assignable to parameter of type 'Theme'.

// console.log(Theme.Dark); // "dark-theme"
// console.log(Theme.System); // "system-theme"
// console.log(Theme["Light"]); // "light-theme"






// enum Direction2 {
//   Up,
//   Down,
//   Left,
//   Right
// }

// const dir = Direction2.Up; // dir: Direction2

// // const 열거형은 최적화가 특별히 중요한 상황들에서 사용됩니다.
// const enum FastDirection {
//   Up,
//   Down,
//   Left,
//   Right
// }

// const fastDir = FastDirection.Up; // fastDir: 0




// // 열거형 대신 type union을 쓰는 곳도 늘어나고 있습니다.
// // 타입 유니언은 열거형과 비슷한 역할을 하지만, 더 유연성이 있습니다.
// type CardSuitUnion = "Hearts" | "Diamonds" | "Clubs" | "Spades";

// function displaySuitUnion(suit: CardSuitUnion): string {
//   switch (suit) {
//     case "Hearts":
//       return "♥ Hearts";
//     case "Diamonds":
//       return "♦ Diamonds";
//     case "Clubs":
//       return "♣ Clubs";
//     case "Spades":
//       return "♠ Spades";
//     default:
//       return "Unknown suit"; // 이 경우는 발생하지 않음
//   }
// }

// console.log(displaySuitUnion("Hearts")); // "♥ Hearts"
// // console.log(displaySuitUnion("Unknown")); // Error: Argument of type '"Unknown"' is not assignable to parameter of type 'CardSuitUnion'.

/* ------------------------------------------------------------------------ */


// 14. 함수

// function greet(name: string): string {
//   return `Hello, ${name}!`;
// }

// const farewell = function (name: string): string {
//   return `Goodbye, ${name}!`;
// };

// const add = (a: number, b: number): number => {
//   return a + b;
// };

// console.log(
//   greet("World"),
//   farewell("Alice"),
//   add(5, 10)
// );






// function add1(a: number, b: number, c?: number): number {
//   if (c) {
//     return a + b + c; // 세 번째 인자가 있으면 모두 더함
//   }
//   return a + b; // 세 번째 인자가 없으면 a와 b만 더함
// }

// const addition1 = add1(1, 2);
// const addition2 = add1(1, 2, 3);

// // const addition3 = add1(1); // // Error: Expected 2-3 arguments, but got 1.







// // 나머지 인자(Spread Operator)를 사용한 함수
// // 나머지 인자는 함수가 가변적인 개수의 인자를 받을 수 있도록 합니다.
// // 이 경우, 인자의 개수는 제한이 없습니다.
// // 나머지 인자는 배열로 전달됩니다.
// function sum(...numbers: number[]): number {
//   return numbers.reduce((acc, num) => acc + num, 0); // 배열의 모든 숫자를 더함
// }

// console.log(
//   sum(1, 2, 3), // 6
//   sum(10, 20, 30, 40), // 100
//   sum() // 0
// ); // 빈 배열이 들어오면 0 반환








// function processInput(value: string): string;
// function processInput(value: number): number;


// function processInput(value: string | number): string | number {
//   if (typeof value === "string") {
//     return `Processed string: ${value.toUpperCase()}`; // 문자열을 대문자로 변환
//   } else {
//     return value * 2; // 숫자를 두 배로 반환
//   }
// }


// const processed1 = processInput("hello"); // "Processed string: HELLO"
// const processed2 = processInput(42); // 84

// // function processInput(value: string): string; 을 선언해서 가능.
// // 선언하지 않았다면 // processed1.toLowerCase(); 는 오류가 발생합니다.
// // 왜그러냐면 // processInput("hello")의 반환 타입이 string | number 이기 때문입니다.
// // 따라서, processed1의 타입은 string | number가 됩니다.
// // 이 경우, TypeScript는 processed1이 string인지 확신할 수 없기 때문에
// // toLowerCase() 메서드를 사용할 수 없습니다.
// // 따라서, processed1.toLowerCase()를 사용하려면 타입 단언을 해야 합니다
// const myString = processed1.toLowerCase(); // "processed string: hello"



// // 콜백 함수
// function fetchData(url: string, callback: (data: string) => void): void {
//   // Simulating an asynchronous operation
//   setTimeout(() => {
//     const data = `Data from ${url}`;
//     callback(data); // 콜백 함수 호출
//   }, 100);
// }

// fetchData("https://api.example.com", (data) => {
//   console.log(data); // "Data from https://api.example.com"
// });


/* ------------------------------------------------------------------------ */



// 15. 인터페이스 (정의;, 선택적/읽기전용 속성, 인덱스 시그니처, 매핑된 타입)


// 선택적 속성
interface Product {
  id: number;
  name: string;
  price: number;
  description?: string; // 선택적 속성
}

const product1: Product = {
  id: 1,
  name: "Laptop",
  price: 999.99,
};

const product2: Product = {
  id: 2,
  name: "Smartphone",
  price: 499.99,
  description: "Latest model",
};


// 선택적 속성을 사용하는 경우에는 타입 가드를 사용하여 안전하게 접근할 수 있습니다.
// 선택적 속성은 객체에 존재하지 않을 수도 있기 때문에, 접근하기 전에 확인이 필요합니다.
function printDescription1(product: Product): void {
  if (product.description) {
    console.log(`Description: ${product.description}`);
  } else {
    console.log("No description available.");
  }
}

// 타입 가드 대신에 Null 병합 연산자(??) 를 사용할 수도 있습니다.
function printDescription2(product: Product): void {
  const description = product.description ?? "No description available.";
  console.log(`Description: ${description}`);
}







// 읽기 전용 속성
interface Config {
  readonly apiUrl: string; // 읽기 전용 속성
  endpoint: string;
  timeout?: number; // 선택적 속성
}

const config: Config = {
  apiUrl: "https://api.example.com",
  endpoint: "/data",
};

config.endpoint = "/new-data"; // 수정 가능
config.timeout = 5000; // 선택적 속성 수정 가능
// config.apiUrl = "https://new-api.example.com"; // 오류 발생: Cannot assign to 'apiUrl' because it is a read-only property.



interface ReadonlyArrayDemo {
  readonly items: number[]; // 읽기 전용 배열 속성
}

const demo: ReadonlyArrayDemo = {
  items: [1, 2, 3, 4, 5],
};

demo.items.push(6);
demo.items[0] = 10;
// demo.items = [7, 8, 9]; // 오류 발생: Cannot assign to 'items' because it is a read-only property.



interface MathOperation {
  (a: number, b: number): number; // 함수 타입 정의
}

const add: MathOperation = (a, b) => a + b; // 함수 구현
const multiply: MathOperation = (a, b) => a * b; // 다른 함수 구현  

// 인터페이스로 함수 타입을 정의했기 때문에 toFixed 메서드를 사용할 수 있습니다.
// toFixed는 number 타입의 메서드이므로, 반환값을 number로 지정해야 합니다.
// 따라서, add와 multiply 함수의 반환 타입은 number입니다.
console.log(
  add(1, 2).toFixed(2), // "3.00"
  multiply(3, 4).toFixed(2) // "12.00"
);



const operations: MathOperation[] = [
  (a, b) => a + b,
  (a, b) => a - b,
  (a, b) => a * b,
  (a, b) => a / b
];

operations.forEach(op => {
  // console.log(op(10, "Two")); // "10Two" - TypeScript는 암묵적으로 string으로 변환합니다.
  // console.log(op(10, 2)); // 오류 발생: Argument of type 'number' is not assignable to parameter of type 'string'.
});




// 인덱스 시그니처
interface PhoneBook {
  [name: string]: string; // 이름을 키로 하고, 전화번호를 값으로 가지는 인덱스 시그니처
}

const phones: PhoneBook = {
  Alice: "123-456-7890",
  Bob: "987-654-3210",
};

phones.Charlie = "555-555-5555"; // 새로운 전화번호 추가 가능
phones["Dave"] = "111-222-3333"; // 대괄호 표기법으로도 추가 가능
phones[0] = "000-000-0000"; // !!!

console.log(console.log(phones)); // { Alice: '123-456-7890', Bob: '987-654-3210', Charlie: '555-555-5555', Dave: '111-222-3333', '0': '000-000-0000' }




interface StringArray {
  [index: number]: string; // 숫자를 인덱스로 사용하여 문자열을 반환하는 인덱스 시그니처
}

const veges: StringArray = {
  10: "Carrot",
  11: "Potato",
  12: "Tomato",
};

const fruits: StringArray = ["Apple", "Banana", "Cherry"]; // 배열로도 사용 가능

console.log(veges[10]); // "Carrot"
console.log(fruits[1]); // "Banana"

console.log(veges, fruits);





type AllowedKeys = 'English' | 'Math' | 'Science';

type Scores = {
  [K in AllowedKeys]: number; // AllowedKeys에 정의된 키를 사용하여 숫자 타입의 속성을 가지는 객체 타입
};

type Grades = {
  [K in AllowedKeys]: string; // AllowedKeys에 정의된 키를 사용하여 문자열 타입의 속성을 가지는 객체 타입
};


const scores: Scores = {
  English: 90,
  Math: 85,
  Science: 95
};

const grades: Grades = {
  English: "A",
  Math: "B",
  Science: "A+"
};


/* ------------------------------------------------------------------------ */
