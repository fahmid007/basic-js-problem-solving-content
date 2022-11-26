// Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"

for (let i = 0; i < 15; i++) {
    if (i === 0 || i % 2 === 0) {
        console.log(i + ": is a even number");
    } else {
        console.log(i + ": is a odd number");
    }

}
