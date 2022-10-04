
//ARROW FUNCTION CARA SIMPLE DARI MEMBUAT FUNCTION

const sayHello = (name) => { // arrow function (=>)
    console.log(`Hello ${name}`);
};

sayHello("Raka");

console.info("-------------------------------------")

const sayBye = (numbers) => console.log(`Goodbye ${numbers}x times`);

sayBye(10);

console.info("-------------------------------------")

const sum = (firstNum, secondNum) => firstNum + secondNum; //tanpa return, jika tidak pakai block "{}"
console.log(sum(1,2));

const sum2 = (firstNum, secondNum) => {
    return firstNum + secondNum;
} //pakai return, jika pakai block "{}"
console.log(sum2(2,2));

console.info("-------------------------------------")

const sayName = say => console.log(`Hello ${say}`); //tanpa kurung parameter (), jika parameter hanya satu
sayName("Raka");

function anonymus(name, age){
    name("Raka");
    age(18);
};

anonymus(
    nama => console.log(`Hello again ${nama}!`), //arrow bisa dipake di anonymus function
    umur => console.log(`Umurmu : ${umur}`)
);