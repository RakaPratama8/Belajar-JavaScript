const orang = {
    nama: "Muhamad Raka Pratama", //jangan lupa pakai koma (,)
    umur: 20,
    "jenis kelamin": "Laki - laki" //bisa pakai string juga
};

console.table(orang);

console.info("Nama: " + orang.nama); //TIDAK REKOMENDASI

console.info(`Nama: ${orang.nama}`) //REKOMENDASI, pakai `...${}`
console.info(`Umur: ${orang.umur}`)
console.info(`Jenis kelamin: ${orang["jenis kelamin"]}`)