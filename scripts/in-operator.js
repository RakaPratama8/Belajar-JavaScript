const person = {
    personSatu: "Raka",
    personDua: "Raihan",
    personTiga: undefined
};

console.info("personSatu" in person); //true, karena index nya masih ada tanpa cek value

//pengecekan in biasa ----------
if ("personTiga" in person) {
    console.info(`Hello ${person.personTiga}`);
} else {
    console.info("Hello Student");
}; //Hello undefined


//pengecekan in tanpa null dan undefined -------
if (person.personTiga != undefined && person.personTiga != null && "personTiga" in person) {
    console.info(`Hello ${person.personTiga}`);
} else {
    console.info("Hello Student");
}; //Hello Student


