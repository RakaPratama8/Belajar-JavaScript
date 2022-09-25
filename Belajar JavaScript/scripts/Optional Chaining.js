const data = {
    parent: {
        child: "raka"
    }
};

let child = data.parent?.child; //child dijabarkan menjadi child = data.parent.child

console.info(`${child}`) //raka

child = data.parentOne?.child;

console.info(child); //undefined, karena parentOne tidak terdefinisi pada array data

// ? untuk mendefinisikan nullish key