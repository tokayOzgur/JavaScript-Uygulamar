// let euclid = require('euclidean-distance')

let distance = require('compute-minkowski-distance');

/* 
     ____________________________
    |                           | 
    |   'p' : 1  => Manhattan   |
    |   'p' : 2  => Euclit      |
    |   'p' : 3  => Minkowski   |
    |___________________________|
*/


// Euklid

console.log("M1 - Euklit = " + distance([-5,5], [3.5,6.5]))
console.log("M1 - Euklit = " + distance([-5,5], [0.5,-1]))
console.log("M1 - Euklit = " + distance([-5,5], [-6,3]))
console.log("M1 - Euklit = " + distance([-5,5], [10.5,4.5]))
console.log("M1 - Euklit = " + distance([-5,5], [10,-1]))


// Manhattan
console.log("\nManhattan = " + distance([3, 7, 1, 4, 5, 2], [2, 6, 11, 4, 8, 1], {
    'p': 1
}))

// Minkowski
console.log("\nMinkowski = " + distance([3, 5], [4, 8], {
    'p': 3
}))