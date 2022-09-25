let array = [
  "Muhamad", "Raka", "Pratama"
];

for (const index in array) {
  console.info(`index ${index} : ${array[index]}`)
}

const array2 = {
  Nama : "Raka",
  Gender : "Laki laki",
  Hobi : "olahraga"
}

for (const property in array2) {
  console.info(`Property ${property} : ${array2[property]}`)
}