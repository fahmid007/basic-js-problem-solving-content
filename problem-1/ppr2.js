//  Write a JavaScript conditional statement to sort three numbers.
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1 

let x = 4;
let y = 0;
let z = -1;

if (x > y && x > z) {
    if (y > z) {
        console.log(x + ',' + y + ',' + z);
    } else {
        console.log(x + ',' + z + ',' + y);
    }
} else if (y > x && y > z) {
    if (x > z) {
        console.log(y + ',' + x + ',' + z);
    } else {
        console.log(y + ',' + z + ',' + x);
    }
} else if (z > x && z > y) {
    if (x > y) {
        console.log(z + ',' + x + ',' + y);
    } else {
        console.log(z + ',' + y + ',' + x);
    }
}