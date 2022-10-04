function getOdd(number){
    let arr = [];

    for(let i = 0; i <= number; i++) {
        if(i % 2 === 1) {
            console.log(`Odd: ${i}`);
            arr.push(i);
        };
    };

    return arr;
};

const result = getOdd(20);

for (const iterator1 of result) {
    console.log(iterator1);
};