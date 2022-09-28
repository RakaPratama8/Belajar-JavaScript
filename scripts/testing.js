//nested function (function didalam function)

function outer(){
    let total = 0 //variabel pada outer function bisa di akses oleh inner function
    function inner(...number){ //inner function
        for (const sum of number) {
            total += sum;
        }
        console.log(total)
    }
    inner(1,2,3,4,5) //inner function hanya bisa diakses di dalam outer function saja
};

outer()