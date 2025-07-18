
# JavaScript Cheatsheet

## Table of Contents
1.  [Variables](#variables)
2.  [Data Types](#data-types)
3.  [Operators](#operators)
4.  [Control Flow](#control-flow)
5.  [Functions](#functions)
6.  [Arrays](#arrays)
7.  [Objects](#objects)
8.  [ES6+ Features](#es6-features)
9.  [Asynchronous JavaScript](#asynchronous-javascript)

---

### Variables
Declare variables using `var`, `let`, or `const`.

```javascript
var name = "John"; // Function-scoped, can be re-declared and updated
let age = 30; // Block-scoped, can be updated but not re-declared
const PI = 3.14; // Block-scoped, cannot be updated or re-declared
```

### Data Types
-   **Primitive:** `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
-   **Non-Primitive:** `object` (includes arrays, functions, objects)

```javascript
let str = "Hello";
let num = 123;
let bool = true;
let n = null;
let undef = undefined;
let sym = Symbol('id');
let big = 123n;

let obj = { key: "value" };
let arr = [1, 2, 3];
```

### Operators
-   **Arithmetic:** `+`, `-`, `*`, `/`, `%`, `**` (Exponentiation)
-   **Assignment:** `=`, `+=`, `-=`, `*=`, `/=`
-   **Comparison:** `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
-   **Logical:** `&&` (AND), `||` (OR), `!` (NOT)
-   **Ternary:** `condition ? exprIfTrue : exprIfFalse`

### Control Flow
**If/Else**
```javascript
if (age > 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

**Switch**
```javascript
switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}
```

**For Loop**
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

**While Loop**
```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

### Functions
**Function Declaration**
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

**Function Expression**
```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

**Arrow Function (ES6)**
```javascript
const greet = (name) => `Hello, ${name}!`;
```

### Arrays
Useful methods:
-   `forEach()`: Executes a provided function once for each array element.
-   `map()`: Creates a new array with the results of calling a provided function on every element.
-   `filter()`: Creates a new array with all elements that pass the test implemented by the provided function.
-   `reduce()`: Executes a reducer function on each element of the array, resulting in a single output value.
-   `find()`: Returns the value of the first element in the array that satisfies the provided testing function.
-   `some()`: Tests whether at least one element in the array passes the test.
-   `every()`: Tests whether all elements in the array pass the test.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
const sum = numbers.reduce((acc, cur) => acc + cur, 0); // 15
```

### Objects
**Object Literal**
```javascript
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};
```

**Accessing Properties**
```javascript
console.log(person.firstName); // Dot notation
console.log(person["lastName"]); // Bracket notation
```

### ES6+ Features
-   **Destructuring:**
    ```javascript
    const { firstName, age } = person;
    const [first, second] = numbers;
    ```
-   **Spread/Rest Operator (`...`):**
    ```javascript
    const arr1 = [1, 2];
    const arr2 = [...arr1, 3, 4]; // Spread
    function sum(...args) { // Rest
        return args.reduce((a, b) => a + b, 0);
    }
    ```
-   **Template Literals:**
    ```javascript
    const greeting = `My name is ${firstName} and I am ${age}.`;
    ```
-   **Modules:**
    ```javascript
    // lib.js
    export const foo = 'bar';
    // main.js
    import { foo } from './lib.js';
    ```

### Asynchronous JavaScript
**Promises**
```javascript
const myPromise = new Promise((resolve, reject) => {
  let condition = true;
  if (condition) {
    resolve("Promise is resolved!");
  } else {
    reject("Promise is rejected!");
  }
});

myPromise
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
```

**Async/Await**
```javascript
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Fetching data failed:', error);
  }
}

fetchData();
```
