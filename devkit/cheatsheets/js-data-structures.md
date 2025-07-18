# JavaScript Data Structures and Their Methods Cheatsheet

This cheatsheet provides an overview of JavaScript's built-in data structures (types) and their most commonly used methods.

## Table of Contents
1.  [Primitive Data Types](#primitive-data-types)
    -   [String](#string)
    -   [Number](#number)
    -   [Boolean](#boolean)
    -   [Null & Undefined](#null--undefined)
    -   [Symbol](#symbol)
    -   [BigInt](#bigint)
2.  [Non-Primitive Data Types (Objects)](#non-primitive-data-types-objects)
    -   [Object](#object)
    -   [Array](#array)
    -   [Function](#function)
    -   [Date](#date)
    -   [RegExp](#regexp)
    -   [Map](#map)
    -   [Set](#set)
    -   [WeakMap](#weakmap)
    -   [WeakSet](#weakset)
    -   [Typed Arrays](#typed-arrays)
    -   [Promise](#promise)
    -   [Error](#error)

---

## Primitive Data Types

Primitive values are immutable (cannot be changed).

### String

Represents textual data. String primitives are immutable, but string methods return new strings.

```javascript
const str = "Hello, World!";
```

**Common Methods:**
-   `length`: (Property) Returns the length of the string.
    ```javascript
    str.length; // 13
    ```
-   `charAt(index)`: Returns the character at the specified index.
    ```javascript
    str.charAt(0); // "H"
    ```
-   `charCodeAt(index)`: Returns the Unicode of the character at the specified index.
    ```javascript
    str.charCodeAt(0); // 72
    ```
-   `concat(str2, ...)`: Joins two or more strings. (Prefer `+` or template literals).
    ```javascript
    str.concat(" How are you?"); // "Hello, World! How are you?"
    ```
-   `includes(searchString, position)`: Checks if a string contains another string.
    ```javascript
    str.includes("World"); // true
    ```
-   `indexOf(searchString, position)`: Returns the index of the first occurrence of a substring.
    ```javascript
    str.indexOf("o"); // 4
    ```
-   `lastIndexOf(searchString, position)`: Returns the index of the last occurrence of a substring.
    ```javascript
    str.lastIndexOf("o"); // 8
    ```
-   `startsWith(searchString, position)`: Checks if a string starts with another string.
    ```javascript
    str.startsWith("Hello"); // true
    ```
-   `endsWith(searchString, length)`: Checks if a string ends with another string.
    ```javascript
    str.endsWith("!"); // true
    ```
-   `slice(startIndex, endIndex)`: Extracts a section of a string and returns a new string.
    ```javascript
    str.slice(0, 5); // "Hello"
    ```
-   `substring(startIndex, endIndex)`: Similar to `slice`, but handles arguments differently (e.g., negative values).
    ```javascript
    str.substring(7, 12); // "World"
    ```
-   `substr(startIndex, length)`: Extracts a specified number of characters from a string. (Deprecated)
-   `replace(searchValue, replaceValue)`: Replaces occurrences of a substring or pattern.
    ```javascript
    str.replace("World", "Universe"); // "Hello, Universe!"
    ```
-   `replaceAll(searchValue, replaceValue)`: Replaces all occurrences of a substring or pattern.
    ```javascript
    "banana".replaceAll("a", "o"); // "bonono"
    ```
-   `split(separator, limit)`: Splits a string into an array of substrings.
    ```javascript
    str.split(", "); // ["Hello", "World!"]
    ```
-   `toLowerCase()`: Converts a string to lowercase.
    ```javascript
    str.toLowerCase(); // "hello, world!"
    ```
-   `toUpperCase()`: Converts a string to uppercase.
    ```javascript
    str.toUpperCase(); // "HELLO, WORLD!"
    ```
-   `trim()`: Removes whitespace from both ends of a string.
    ```javascript
    "  trim me  ".trim(); // "trim me"
    ```
-   `trimStart()` / `trimLeft()`: Removes whitespace from the beginning of a string.
-   `trimEnd()` / `trimRight()`: Removes whitespace from the end of a string.
-   `padStart(targetLength, padString)`: Pads the current string with another string from the start.
    ```javascript
    "5".padStart(2, "0"); // "05"
    ```
-   `padEnd(targetLength, padString)`: Pads the current string with another string from the end.
    ```javascript
    "5".padEnd(2, "0"); // "50"
    ```
-   `repeat(count)`: Returns a new string with a specified number of copies of the string.
    ```javascript
    "abc".repeat(2); // "abcabc"
    ```
-   `match(regexp)`: Retrieves the matches when matching a string against a regular expression.
-   `search(regexp)`: Searches for a match between a regular expression and a string.
-   `matchAll(regexp)`: Returns an iterator of all results matching a string against a regular expression.

### Number

Represents numeric data (integers and floating-point numbers).

```javascript
const num = 123.456;
```

**Common Methods (Static on `Number` object):**
-   `Number.isFinite(value)`: Determines whether the passed value is a finite number.
    ```javascript
    Number.isFinite(123); // true
    Number.isFinite(Infinity); // false
    ```
-   `Number.isInteger(value)`: Determines whether the passed value is an integer.
    ```javascript
    Number.isInteger(123); // true
    Number.isInteger(123.45); // false
    ```
-   `Number.isNaN(value)`: Determines whether the passed value is `NaN` (Not-a-Number).
    ```javascript
    Number.isNaN(NaN); // true
    Number.isNaN("hello"); // false (use global isNaN for type coercion)
    ```
-   `Number.parseFloat(string)`: Parses a string argument and returns a floating-point number.
    ```javascript
    Number.parseFloat("123.45px"); // 123.45
    ```
-   `Number.parseInt(string, radix)`: Parses a string argument and returns an integer.
    ```javascript
    Number.parseInt("123px"); // 123
    ```

**Common Methods (Instance on Number prototype):**
-   `toFixed(digits)`: Formats a number using fixed-point notation.
    ```javascript
    num.toFixed(2); // "123.46" (returns string)
    ```
-   `toPrecision(precision)`: Formats a number to a specified length.
    ```javascript
    num.toPrecision(4); // "123.5" (returns string)
    ```
-   `toExponential(fractionDigits)`: Returns a string representing the Number object in exponential notation.
    ```javascript
    num.toExponential(2); // "1.23e+2"
    ```
-   `toString(radix)`: Returns a string representing the specified Number object.
    ```javascript
    (10).toString(2); // "1010" (binary)
    ```
-   `valueOf()`: Returns the primitive value of a Number object.

### Boolean

Represents a logical entity and can have two values: `true` or `false`.

```javascript
const bool = true;
```

**Common Methods (Instance on Boolean prototype):**
-   `valueOf()`: Returns the primitive value of a Boolean object.
-   `toString()`: Returns "true" or "false".

### Null & Undefined

-   `null`: Represents the intentional absence of any object value. It is a primitive value.
-   `undefined`: Indicates that a variable has not been assigned a value, or that a property does not exist.

Neither `null` nor `undefined` have methods.

### Symbol

A unique and immutable primitive value that may be used as the key of an Object property.

```javascript
const sym1 = Symbol('description');
const sym2 = Symbol('description');
```

**Common Methods (Static on `Symbol` object):**
-   `Symbol.for(key)`: Retrieves a Symbol from the global Symbol registry.
-   `Symbol.keyFor(sym)`: Retrieves the key from the global Symbol registry for a given Symbol.

### BigInt

Represents whole numbers larger than 2^53 - 1 (the largest number JavaScript can reliably represent with `Number`).

```javascript
const bigInt = 9007199254740991n; // Note the 'n' at the end
```

**Common Methods (Instance on BigInt prototype):**
-   `toString(radix)`: Returns a string representing the BigInt object.
-   `valueOf()`: Returns the primitive value of a BigInt object.

## Non-Primitive Data Types (Objects)

Objects are mutable and are collections of properties.

### Object

The base for all non-primitive data types.

```javascript
const obj = { a: 1, b: 2, c: { d: 3 } };
const arr = [1, 2, 3];
```

**Static Methods on `Object`:**
-   `Object.assign(target, ...sources)`: Copies all enumerable own properties from one or more source objects to a target object.
    ```javascript
    const obj1 = { a: 1 };
    const obj2 = { b: 2 };
    Object.assign(obj1, obj2); // obj1 is now { a: 1, b: 2 }
    ```
-   `Object.create(proto, [propertiesObject])`: Creates a new object with the specified prototype object and properties.
    ```javascript
    const proto = { greeting: 'Hello' };
    const newObj = Object.create(proto);
    newObj.greeting; // "Hello"
    ```
-   `Object.defineProperties(obj, props)`: Defines new or modifies existing properties directly on an object, returning the object.
-   `Object.defineProperty(obj, prop, descriptor)`: Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
-   `Object.entries(obj)`: Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.
    ```javascript
    Object.entries(obj); // [["a", 1], ["b", 2], ["c", { d: 3 }]]
    ```
-   `Object.freeze(obj)`: Freezes an object, preventing new properties from being added to it, existing properties from being removed, and preventing existing properties, or their enumerability, configurability, or writability, from being changed.
    ```javascript
    const frozenObj = Object.freeze({ x: 1 });
    // frozenObj.x = 2; // Throws TypeError in strict mode
    ```
-   `Object.fromEntries(iterable)`: Returns a new object from an iterable of `[key, value]` pairs.
    ```javascript
    Object.fromEntries([['a', 1], ['b', 2]]); // { a: 1, b: 2 }
    ```
-   `Object.getOwnPropertyDescriptor(obj, prop)`: Returns a property descriptor for an own property (that is, one directly present on an object and not in the object's prototype chain) of a given object.
-   `Object.getOwnPropertyDescriptors(obj)`: Returns all own property descriptors of a given object.
-   `Object.getOwnPropertyNames(obj)`: Returns an array of all properties (enumerable or not) found directly upon a given object.
-   `Object.getOwnPropertySymbols(obj)`: Returns an array of all Symbol properties found directly upon a given object.
-   `Object.getPrototypeOf(obj)`: Returns the prototype (internal `[[Prototype]]` property) of the specified object.
-   `Object.hasOwn(obj, prop)`: Returns `true` if the specified object has the indicated property as its own property. (ES2022)
    ```javascript
    Object.hasOwn(obj, 'a'); // true
    Object.hasOwn(obj, 'toString'); // false
    ```
-   `Object.is(value1, value2)`: Determines whether two values are the same value. (More robust than `===` for `NaN` and `+0/-0`).
    ```javascript
    Object.is(NaN, NaN); // true
    Object.is(0, -0); // false
    ```
-   `Object.isExtensible(obj)`: Determines if an object is extensible (whether new properties can be added to it).
-   `Object.isFrozen(obj)`: Determines if an object is frozen.
-   `Object.isSealed(obj)`: Determines if an object is sealed.
-   `Object.keys(obj)`: Returns an array of a given object's own enumerable property names.
    ```javascript
    Object.keys(obj); // ["a", "b", "c"]
    ```
-   `Object.preventExtensions(obj)`: Prevents new properties from ever being added to an object.
-   `Object.seal(obj)`: Seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.
-   `Object.setPrototypeOf(obj, proto)`: Sets the prototype (i.e., the internal `[[Prototype]]` property) of a specified object to another object or `null`.
-   `Object.values(obj)`: Returns an array of a given object's own enumerable property values.
    ```javascript
    Object.values(obj); // [1, 2, { d: 3 }]
    ```

**Instance Methods (on `Object.prototype`):**
-   `obj.hasOwnProperty(prop)`: Returns a boolean indicating whether the object has the specified property as its own property (not inherited).
    ```javascript
    obj.hasOwnProperty('a'); // true
    obj.hasOwnProperty('toString'); // false
    ```
-   `obj.isPrototypeOf(anotherObj)`: Returns a boolean indicating whether the object this method is called on is in the prototype chain of the specified object.
-   `obj.propertyIsEnumerable(prop)`: Returns a boolean indicating whether the specified property is enumerable and is an own property of the object.
-   `obj.toLocaleString()`: Returns a string representing the object. This method is intended to be overridden by derived objects for locale-specific purposes.
-   `obj.toString()`: Returns a string representation of the object.
    ```javascript
    obj.toString(); // "[object Object]"
    arr.toString(); // "1,2,3"
    ```
-   `obj.valueOf()`: Returns the primitive value of the specified object.

### Array

Ordered, integer-indexed collections of values.

```javascript
const arr = [1, 2, 3, 4, 5];
const nestedArr = [1, [2, 3], 4];
```

**Static Methods on `Array`:**
-   `Array.from(arrayLike, [mapFn, thisArg])`: Creates a new, shallow-copied Array instance from an array-like or iterable object.
    ```javascript
    Array.from('hello'); // ['h', 'e', 'l', 'l', 'o']
    Array.from([1, 2, 3], x => x + x); // [2, 4, 6]
    ```
-   `Array.isArray(value)`: Determines whether the passed value is an Array.
    ```javascript
    Array.isArray(arr); // true
    Array.isArray({}); // false
    ```
-   `Array.of(...elements)`: Creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
    ```javascript
    Array.of(1, 2, 3); // [1, 2, 3]
    Array.of(7); // [7]
    ```

**Instance Methods (on `Array.prototype`):**
-   `length`: (Property) Returns the number of elements in an array.
    ```javascript
    arr.length; // 5
    ```
-   `at(index)`: Returns the element at the specified index, allowing for negative indices to count from the end. (ES2022)
    ```javascript
    arr.at(0); // 1
    arr.at(-1); // 5
    ```
-   `concat(...arrays)`: Returns a new array comprised of this array joined with other array(s) and/or value(s).
    ```javascript
    arr.concat([6, 7]); // [1, 2, 3, 4, 5, 6, 7]
    ```
-   `copyWithin(target, start, [end])`: Copies a sequence of array elements within the array to the position starting at `target`.
-   `entries()`: Returns a new Array Iterator object that contains the `[key, value]` pairs for each index in the array.
-   `every(callbackFn, [thisArg])`: Tests whether all elements in the array pass the test implemented by the provided function.
    ```javascript
    arr.every(num => num > 0); // true
    ```
-   `fill(value, [start, end])`: Fills all the elements of an array from a start index to an end index with a static value.
-   `filter(callbackFn, [thisArg])`: Creates a new array with all elements that pass the test implemented by the provided function.
    ```javascript
    arr.filter(num => num % 2 === 0); // [2, 4]
    ```
-   `find(callbackFn, [thisArg])`: Returns the value of the first element in the array that satisfies the provided testing function.
-   `findIndex(callbackFn, [thisArg])`: Returns the index of the first element in the array that satisfies the provided testing function.
-   `findLast(callbackFn, [thisArg])`: Returns the value of the last element in the array that satisfies the provided testing function. (ES2023)
-   `findLastIndex(callbackFn, [thisArg])`: Returns the index of the last element in the array that satisfies the provided testing function. (ES2023)
-   `flat([depth])`: Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    ```javascript
    nestedArr.flat(); // [1, 2, 3, 4]
    ```
-   `flatMap(callbackFn, [thisArg])`: Maps each element using a mapping function, then flattens the result into a new array.
    ```javascript
    arr.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
    ```
-   `forEach(callbackFn, [thisArg])`: Executes a provided function once for each array element.
    ```javascript
    arr.forEach(item => console.log(item));
    ```
-   `includes(searchElement, [fromIndex])`: Determines whether an array includes a certain value among its entries.
    ```javascript
    arr.includes(3); // true
    ```
-   `indexOf(searchElement, [fromIndex])`: Returns the first index at which a given element can be found.
-   `join([separator])`: Joins all elements of an array into a string.
    ```javascript
    arr.join('-'); // "1-2-3-4-5"
    ```
-   `keys()`: Returns a new Array Iterator object that contains the keys for each index in the array.
-   `lastIndexOf(searchElement, [fromIndex])`: Returns the last index at which a given element can be found.
-   `map(callbackFn, [thisArg])`: Creates a new array populated with the results of calling a provided function on every element.
    ```javascript
    arr.map(num => num * 2); // [2, 4, 6, 8, 10]
    ```
-   `pop()`: Removes the last element from an array and returns that element.
    ```javascript
    arr.pop(); // 5 (arr is now [1, 2, 3, 4])
    ```
-   `push(...elements)`: Adds one or more elements to the end of an array and returns the new length.
    ```javascript
    arr.push(6); // arr is now [1, 2, 3, 4, 5, 6]
    ```
-   `reduce(callbackFn, [initialValue])`: Executes a reducer function on each element of the array, resulting in a single output value.
    ```javascript
    arr.reduce((sum, num) => sum + num, 0); // 15
    ```
-   `reduceRight(callbackFn, [initialValue])`: Executes a reducer function on each element of the array, from right to left, resulting in a single output value.
-   `reverse()`: Reverses an array in place.
-   `shift()`: Removes the first element from an array and returns that element.
    ```javascript
    arr.shift(); // 1 (arr is now [2, 3, 4, 5])
    ```
-   `slice([start, end])`: Returns a shallow copy of a portion of an array into a new array.
    ```javascript
    arr.slice(1, 3); // [2, 3]
    ```
-   `some(callbackFn, [thisArg])`: Tests whether at least one element in the array passes the test.
    ```javascript
    arr.some(num => num > 5); // false
    ```
-   `sort([compareFn])`: Sorts the elements of an array in place and returns the sorted array.
-   `splice(start, [deleteCount, ...items])`: Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
    ```javascript
    arr.splice(2, 1, 6); // arr is now [1, 2, 6, 4, 5] (removed 3, added 6)
    ```
-   `toLocaleString()`: Returns a string representing the elements of the array. The elements are converted to strings using their `toLocaleString` methods.
-   `toReversed()`: Returns a new array with the elements in reversed order. (ES2023)
-   `toSorted([compareFn])`: Returns a new array with the elements sorted. (ES2023)
-   `toSpliced(start, [deleteCount, ...items])`: Returns a new array with some elements removed and/or replaced. (ES2023)
-   `toString()`: Returns a string representing the specified array and its elements.
-   `unshift(...elements)`: Adds one or more elements to the beginning of an array and returns the new length.
    ```javascript
    arr.unshift(0); // arr is now [0, 1, 2, 3, 4, 5]
    ```
-   `values()`: Returns a new Array Iterator object that contains the values for each index in the array.
-   `with(index, value)`: Returns a new array with the element at the given index replaced with the given value. (ES2023)

### Function

Callable objects that execute a block of code.

```javascript
function greet(name) { return `Hello, ${name}!`; }
const add = (a, b) => a + b;
```

**Common Methods:**
-   `call(thisArg, arg1, ...)`: Calls a function with a given `this` value and arguments provided individually.
    ```javascript
    greet.call(null, "Alice"); // "Hello, Alice!"
    ```
-   `apply(thisArg, [argsArray])`: Calls a function with a given `this` value and arguments provided as an array.
    ```javascript
    add.apply(null, [5, 3]); // 8
    ```
-   `bind(thisArg, arg1, ...)`: Creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
    ```javascript
    const boundGreet = greet.bind(null, "Bob");
    boundGreet(); // "Hello, Bob!"
    ```
-   `toString()`: Returns a string representing the source code of the function.

### Date

Represents dates and times.

```javascript
const now = new Date();
const specificDate = new Date("2023-01-15T10:00:00Z");
```

**Common Methods:**
-   `getFullYear()`: Gets the year (4 digits).
-   `getMonth()`: Gets the month (0-11).
-   `getDate()`: Gets the day of the month (1-31).
-   `getHours()`: Gets the hour (0-23).
-   `getMinutes()`: Gets the minutes (0-59).
-   `getSeconds()`: Gets the seconds (0-59).
-   `getMilliseconds()`: Gets the milliseconds (0-999).
-   `getTime()`: Gets the number of milliseconds since January 1, 1970, 00:00:00 UTC.
-   `getDay()`: Gets the day of the week (0 for Sunday, 6 for Saturday).
-   `setFullYear(year, month, date)`: Sets the year.
-   `setMonth(month, date)`: Sets the month.
-   `setDate(date)`: Sets the day of the month.
-   `setHours(hour, min, sec, ms)`: Sets the hour.
-   `setMinutes(min, sec, ms)`: Sets the minutes.
-   `setSeconds(sec, ms)`: Sets the seconds.
-   `setMilliseconds(ms)`: Sets the milliseconds.
-   `setTime(milliseconds)`: Sets the date and time by adding or subtracting milliseconds to/from 1 January 1970.
-   `toDateString()`: Returns the date portion of a Date object as a human-readable string.
-   `toTimeString()`: Returns the time portion of a Date object as a human-readable string.
-   `toISOString()`: Returns the date in ISO format (e.g., "2023-01-15T10:00:00.000Z").
-   `toLocaleString([locales[, options]])`: Returns a string with a language-sensitive representation of this date.
-   `toLocaleDateString()`: Returns the date portion as a string, using locale conventions.
-   `toLocaleTimeString()`: Returns the time portion as a string, using locale conventions.
-   `parse(string)`: (Static) Parses a string representation of a date, and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.

### RegExp

Used for pattern matching with text.

```javascript
const regex = /abc/i; // Case-insensitive match for "abc"
const regex2 = new RegExp("xyz", "g"); // Global match for "xyz"
```

**Common Methods:**
-   `test(string)`: Tests for a match in a string. Returns `true` or `false`.
    ```javascript
    regex.test("ABC"); // true
    ```
-   `exec(string)`: Executes a search for a match in a string. Returns an array of information or `null`.
    ```javascript
    regex.exec("ABC"); // ["ABC", index: 0, input: "ABC", groups: undefined]
    ```
-   `toString()`: Returns a string representation of the RegExp object.

### Map

A collection of key-value pairs where keys can be any data type (objects, primitives, etc.). Maintains insertion order.

```javascript
const myMap = new Map();
myMap.set("name", "Alice");
myMap.set(1, "one");
```

**Common Methods:**
-   `set(key, value)`: Adds or updates an element with a specified key and value.
-   `get(key)`: Returns the value associated with the key, or `undefined` if the key is not found.
    ```javascript
    myMap.get("name"); // "Alice"
    ```
-   `has(key)`: Returns a boolean indicating whether an element with the specified key exists.
    ```javascript
    myMap.has("name"); // true
    ```
-   `delete(key)`: Removes the specified element by key. Returns `true` if an element existed and was removed, or `false` otherwise.
-   `clear()`: Removes all elements from the Map.
-   `size`: (Property) Returns the number of key-value pairs in the Map.
    ```javascript
    myMap.size; // 2
    ```
-   `keys()`: Returns a new Iterator object that contains the keys for each element in the Map.
-   `values()`: Returns a new Iterator object that contains the values for each element in the Map.
-   `entries()`: Returns a new Iterator object that contains the `[key, value]` pairs for each element in the Map.
-   `forEach(callbackFn)`: Executes a provided function once per each key/value pair in the Map.

### Set

A collection of unique values. Values can be any data type. Maintains insertion order.

```javascript
const mySet = new Set();
mySet.add(1);
mySet.add("hello");
mySet.add(1); // Ignored, as 1 already exists
```

**Common Methods:**
-   `add(value)`: Adds a new element with the specified value to the Set.
-   `delete(value)`: Removes the specified element by value. Returns `true` if an element existed and was removed, or `false` otherwise.
-   `has(value)`: Returns a boolean indicating whether an element with the specified value exists.
    ```javascript
    mySet.has("hello"); // true
    ```
-   `clear()`: Removes all elements from the Set.
-   `size`: (Property) Returns the number of unique values in the Set.
    ```javascript
    mySet.size; // 2
    ```
-   `keys()`: Returns a new Iterator object that contains the values for each element in the Set (same as `values()`).
-   `values()`: Returns a new Iterator object that contains the values for each element in the Set.
-   `entries()`: Returns a new Iterator object that contains the `[value, value]` pairs for each element in the Set.
-   `forEach(callbackFn)`: Executes a provided function once per each value in the Set.

### WeakMap

A collection of key-value pairs where keys must be objects and are held "weakly". If there are no other references to a key object, it can be garbage collected.

```javascript
const objKey = {};
const myWeakMap = new WeakMap();
myWeakMap.set(objKey, "data");
```

**Common Methods:**
-   `set(key, value)`: Adds or updates an element with a specified object key and value.
-   `get(key)`: Returns the value associated with the key, or `undefined`.
-   `has(key)`: Returns a boolean indicating whether an element with the specified key exists.
-   `delete(key)`: Removes the specified element by key.

**Key Differences from Map:**
-   Keys must be objects.
-   Keys are weakly referenced (no strong reference prevents garbage collection).
-   Not iterable (`size`, `keys`, `values`, `entries`, `forEach` are not available).
-   Cannot be cleared.

### WeakSet

A collection of unique objects where objects are held "weakly". If there are no other references to an object, it can be garbage collected.

```javascript
const objVal = {};
const myWeakSet = new WeakSet();
myWeakSet.add(objVal);
```

**Common Methods:**
-   `add(value)`: Adds a new object to the WeakSet.
-   `delete(value)`: Removes the specified object.
-   `has(value)`: Returns a boolean indicating whether the specified object exists.

**Key Differences from Set:**
-   Values must be objects.
-   Values are weakly referenced.
-   Not iterable (`size`, `keys`, `values`, `entries`, `forEach` are not available).
-   Cannot be cleared.

### Typed Arrays

Array-like objects that provide a mechanism for accessing raw binary data. Examples include `Int8Array`, `Uint8Array`, `Float32Array`, etc.

```javascript
const buffer = new ArrayBuffer(16); // 16 bytes
const int32View = new Int32Array(buffer); // View as 4 32-bit integers
int32View[0] = 42;
```

**Common Methods (Inherit from `Array.prototype` and `TypedArray.prototype`):**
-   Most Array methods (e.g., `map`, `filter`, `reduce`, `slice`, `forEach`, `length`).
-   `set(array, offset)`: Stores multiple values in the Typed Array.
-   `subarray(begin, end)`: Returns a new Typed Array view of the specified portion of the current Typed Array.

### Promise

Represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // async operation
});
```

**Common Methods:**
-   `then(onFulfilled, onRejected)`: Attaches callbacks for the resolution and/or rejection of the Promise.
    ```javascript
    myPromise.then(value => console.log(value), error => console.error(error));
    ```
-   `catch(onRejected)`: Attaches a callback for only the rejection of the Promise.
    ```javascript
    myPromise.catch(error => console.error(error));
    ```
-   `finally(onFinally)`: Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected).
    ```javascript
    myPromise.finally(() => console.log("Promise settled"));
    ```
-   `Promise.all(iterable)`: (Static) Returns a single Promise that resolves when all of the promises in the iterable argument have resolved.
-   `Promise.allSettled(iterable)`: (Static) Returns a Promise that resolves after all of the given promises have either fulfilled or rejected.
-   `Promise.any(iterable)`: (Static) Returns a Promise that fulfills as soon as any of the promises in the iterable fulfills.
-   `Promise.race(iterable)`: (Static) Returns a Promise that resolves or rejects as soon as one of the promises in the iterable resolves or rejects.
-   `Promise.resolve(value)`: (Static) Returns a Promise object that is resolved with the given value.
-   `Promise.reject(reason)`: (Static) Returns a Promise object that is rejected with the given reason.

### Error

Represents an error that occurred during runtime.

```javascript
try {
  throw new Error("Something went wrong!");
} catch (e) {
  console.error(e.name, e.message);
}
```

**Common Properties:**
-   `name`: The name of the error type (e.g., "Error", "TypeError", "ReferenceError").
-   `message`: A human-readable description of the error.
-   `stack`: (Non-standard but widely supported) A string representing the point in the code where the `Error` was instantiated.

**Specific Error Types:**
-   `EvalError`: An error regarding the global `eval()` function.
-   `RangeError`: A numeric variable or parameter is outside of its valid range.
-   `ReferenceError`: An invalid reference has occurred.
-   `SyntaxError`: A syntax error has occurred.
-   `TypeError`: An operand or argument is not of the type expected by an operation or function.
-   `URIError`: An error when encoding or decoding a URI.
-   `AggregateError`: Represents an error where several errors are wrapped in a single error.