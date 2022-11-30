console.log("Are you tracking now?");

const num1 = 4;
const datatype = typeof num1;
console.log(`My num1 variable is ${datatype}`);

const string1 = "I am going to concatenate this string and";
const string2 = " this string together using concat()";

console.log(string1.concat(string2));

const num2 = 57; 
const num3 = 43;
console.log(`57 + 43 = ${num2 + num3}`);

const numString = '47';
console.log(`numString parsed with parseInt = ${numString}`);

const isNaNweirdness = NaN === NaN;
console.log(`It's a little weird that NaN === NaN turns out to be ${isNaNweirdness}`);

const fortySeven = '47';
let typeCoercion = fortySeven = numString;
console.log(`The string \'47\' should be equal to the number 47 without parsing the primitive, but it can be ${typeCoercion} when you use type coercion (which is bad).`);

const exponents = 5**3;
console.log(`Exponent operators are fun. For instance, typing \'5**3\' will get you 5 raised to the 3rd power, or ${exponents} without using a method.`);

const findIndexOf = "Leggo my eggo you weird looking creature with no body!";
const foundIndex = findIndexOf.indexOf('eggo');
const doesInclude = findIndexOf.includes('creature');
console.log(findIndexOf);
console.log(`It\'s nice when software finds stuff for you. For instance, I can find the index of a word like \'eggo\' in the sentence above: ${foundIndex}, or find out if the word \'creature\' is included: ${doesInclude}`);