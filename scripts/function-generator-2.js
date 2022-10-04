function* getOdd(number){
    for(let i = 0; i <= number; i++) {
        if(i % 2 === 0){
            yield i;
            console.log(`even: ${i}`)
        };
    };
};

const getEven = getOdd(20);

console.log(getEven.next().value);
console.log(getEven.next().value); 
console.log(getEven.next().value);
/*
 hanya 3 kali di eksekusi karena sifatnya lazy menggunakan 
 function bawaan generator next().value
 */
