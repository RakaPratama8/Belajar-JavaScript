let value1 = "1";

let value2 = 2;

console.log(`${value1 + value2}`);

value1 = 20;
value2 = 22;

const result = value1.toString() + value2.toString();

console.log(result);

// value1 = "12raka";
value1 = "12";

const convert = Number(value1);
const convert1 = parseInt(value1);
const convert2 = parseFloat(value1);

console.info(convert);
console.info(convert1);
console.info(convert2);

let numberCheck = isNaN(Number("Raka"));

console.info(numberCheck); //true

numberCheck = 20;

console.info(`${isNaN(numberCheck)}`); //false
