// global scope
let counter = 0;

function hitMe(){
    // local scope hitMe
    counter++;
};

hitMe()
hitMe()
hitMe()

console.info(counter);

//-------------------Nested function -------------------

function value(){ //function ini kayak global scope dari function didalamnya

    const nama = "Raka";

    function valueNested(){ //function ini kayak local scope dari function 
        console.info(nama) 
    };

    valueNested();
}

value();