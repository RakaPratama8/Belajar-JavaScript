// Anonymus function biasanya untuk mengirim function2 yang sederhana


let anonym = function(name){
    console.log(`Hello ${name}`) //Anonymus function di variable
};

anonym("Raka")

function getNum(number, author){ //Anonymus function di parameter
    number(`${Math.pow(2, 3)}`);
    author("Raka");
};

getNum(
    function(sum){
        console.log(sum); //sum stand for "number" param
    },
    function(name){
        console.log(`Great answer, ${name}`) //name stand for "author" param
    }
);