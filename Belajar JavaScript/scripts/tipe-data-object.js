const product = {};

product["Nama"] = "Oreo";
product["Tipe"] = 2;
product["Stok"] = true;
product["kerusakan"] = 20;

delete product["kerusakan"];

console.table(product);