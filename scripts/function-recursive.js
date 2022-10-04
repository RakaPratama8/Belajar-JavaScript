function factorial(value){
    let result = 1;
    for(let i = 1;i <= value;i++){
        result *= i;
    };
    return result;
};

console.log(factorial(10)); 

function hasil(value) {
    if(value === 1){
        return 1; 
    } else if(value === 0){
        return 0;
    } else {
        return value *= hasil(value-1); //recursive function (memanggil function di dalam dirinya sendiri)
                                        // supaya menciptakan loop factorial tanpa menggunakan while ataupun for
    };
};

console.info(hasil(10))