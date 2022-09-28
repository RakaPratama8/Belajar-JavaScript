function handphone(merk, version){
    const say = {
        Merk : `${merk}`,
        Version : `${version}`
    }
    return say;
};

const result = handphone("Samsung", 1.2);
console.table(result);

console.log("--------------BATAS-------------------")

function value(array, searchValue){
    for(let list of array){
        if(list === searchValue){
            return true;
        }
        
    }
    return false;
}

const data1 = [1,2,3,4,4,5,54,3,1,10,98,100];
const data2 = 100;

const hasil = value(data1, data2)
console.info(hasil); //false