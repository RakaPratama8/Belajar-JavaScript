

// for of hanya bisa digunakan array index, string dll. 
// for of tidak bisa digunakan di array object ({property : value}), karena array object tidak iterable
// direkomendasikan

// for pada array index
let array = [
  "Muhamad", "Raka", "Pratama"
];

for (const value of array) {
  console.info(value);
};


// for pada string
array = "Muhamad Raka Pratama";

for (const value2 of array) {
  console.info(value2);
};