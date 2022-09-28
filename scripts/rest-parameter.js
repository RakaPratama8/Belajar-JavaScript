function barang(kuantitas_kg, ...merk){ //rest parameter (...parameter)
    console.log(`nama: ${merk}`);
    console.log(`usia: ${kuantitas_kg}`);
};

barang(19, "okky", "oreo", "juice");

function stock(name, ...quantity){
    let total = 0
    for (const sum of quantity) {
        total += sum
    }
    console.log(`Barang: ${name} | Banyak: ${total}`)
    
}

stock("apel", 12,23,5,1,2);
stock("jeruk", 20,12,32);

const data1 = "Oreo";
const data2 = [12,2,3,20,20,4,1]; //terlanjur buat array

stock(data1, ...data2) //spread syntax