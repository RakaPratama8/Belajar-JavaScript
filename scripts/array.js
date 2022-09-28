let filledArray = [1, 2, 3]; //data bebas

console.info(filledArray);

const array = [];

array.push("Muhamad");
array.push("Raka", "Pratama");
array.push("Fathan", 223, true);

console.table(array);

array[2] = "Raihan"; //replace array

console.table(array);
console.info(array[0]);

delete array[2]; //menghapus array

console.table(array);
console.info(array[2]); //undefined
console.info(array.length) //6




