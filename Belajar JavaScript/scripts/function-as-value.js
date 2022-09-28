function getName(firstName, lastName){
    console.log(`Hello ${firstName} ${lastName}`);
};

let register = getName; //function jadi value

getName("Raka", "Pratama");
register("Raihan", "Fadilah");

 function sayName(call){
    call("Raka", ""); //sama dengan getName("Raka", "")
 };

 sayName(getName); //function "getName" dimasukan ke parameter "call" di function sayName
 sayName(register);