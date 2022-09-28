// "do", minimal dieksekusi sekali walaupun value bernilai false
let value = 179;

do {
  if (value % 2) {
    console.info(`angka ganjil: ${value}`)
  } else {
    console.info(`angka genap: ${value}`)
  };
  value++
}  while (value <= 10)
