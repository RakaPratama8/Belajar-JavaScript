for (let value = 1; value <= 10; value++) {
    if(value % 2 == 0){
        continue; //pas genap dia true, lanjut ke post statement
    };
    //pas ganjil dia false, lanjut kesini 
    console.log(`perulangan Ganjil ke-${value}`)
};

value = 1

while(true){ //klo while(true) berarti INFINITE LOOP

    console.info(`Bilangan Urutan ke-${value}`)
    value++

    if(value > 100){
        break; //pas value = 100, dia berhenti looping
    }

}