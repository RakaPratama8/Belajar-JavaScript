//while loop versi sederhana dari for loop

let value = 1;


  while (value <= 10) {
  if (value % 2) {
    console.info(`angka ganjil: ${value}`)
  } else {
    console.info(`angka genap: ${value}`)
  };
  value++
}

/*

while (value < 10) {
	let hasil = value % 2 ? console.info(`angka ganjil ${value}`) : console.info(`angka genap ${value}`);
	value++
}

*/