//Write a JavaScript program to find which 1st January is being a Sunday between 2000 and 2050.

console.log('===============');
for (let year = 2000; year <= 2050; year++) {
    const date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
        console.log("First January is being a Monday " + year);
    }
}
console.log('===============');