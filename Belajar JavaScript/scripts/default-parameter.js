function barang(nama, usia = null){ //default parameter menggunakan "=" (seperti buat variable);
    console.log(`nama: ${nama}`);
    console.log(`usia: ${usia}`);
};

barang("Raka", 18);
barang("Raihan");