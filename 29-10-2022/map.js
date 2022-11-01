const arr = [1, 2, 3, 4, 5]

console.log(arr.map(a => {
    if (a == 3)
        return a;
}));


for (let a = 1; a <= 50; a++) {
    if (a % 3 == 0) {
        console.log("fuzz");
    }
    elseif(a % 5 == 0) {
        console.log("Buzz");
    }
    elseif(a % 7 == 0) {
        console.log("Duzz");
    }
}
