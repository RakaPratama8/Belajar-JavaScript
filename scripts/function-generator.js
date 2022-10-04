//lazy (with generator(*))

function* getOdd(number){
    for(let i = 0; i <= number; i++) {
        if(i % 2 === 0){
            yield i;
            console.log(`even: ${i}`)
        };
    };
};

const getEven = getOdd(20);

for (const iterator of getEven) {
    console.log(iterator);
};

console.log("-------------------------------------------------");

//eager (without function generator(*))

function getOddArray(number1){
    let arr = [];

    for(let i = 0; i <= number1; i++) {
        if(i % 2 === 1) {
            console.log(`Odd: ${i}`);
            arr.push(i);
        };
    };

    return arr;
};

const result = getOddArray(20);

for (const iterator1 of result) {
    console.log(iterator1);
};