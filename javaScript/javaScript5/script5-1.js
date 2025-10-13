function printName(cb1, cb2, cb3) {
    console.log("Binayak");
    cb1();
    cb2();
    cb3();
}
function printLastName() {
    console.log("Bidyasagar");
}

function printAge() {
    console.log("30");
}

function printAddress() {
    console.log("Kathmandu");
}

printName(printLastName, printAge, printAddress); 