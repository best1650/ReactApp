/**
 * Big-O Notation
 * 
 * Algorithm time(execution time) and space(memory consumed).
 * n represents the number of input which is approaching infinity.
 * 1 < log(n) < n < n^2 < n^3 < n^n
 */

// Coefficient Rule: "Get Rid of Constants"
function GetRidOfConstants(n) {
    // 1. Get Rid of Constants - O(n)
    for (var i = 0; i < 5*n; i++){}

    // 2. Accumulative Addtion or Reduction - O(n)
    count += 3;
}

// Sum Rule: "Add Big-Os Up"
function AddBigOsUp(n) {
    // If f(n) is O(h(n)) and g(n) is O(p(n)), 
    // then f(n)+g(n) is O(h(n)+p(n)). 
    // The final result is O(n).
    for (var i = 0; i < 3*n; i++){}
    for (var i = 0; i < 5*n; i++){}
}

// Product Rule: "Multiply Big-Os"
function MultiplyBigOs(n) {
    // If f(n) is O(h(n)) and g(n) is O(p(n)), 
    // then f(n)g(n) is O(h(n)p(n)).
    // The final result is O(n^2).
    for (var i = 0; i < 3*n; i++){
        for (var i = 0; i < 5*n; i++){}
    }
}

// Polynomial Rule: "Big-O to the Power of k"
function BigOToThePowerOfk(n) {
    // If f(n) is a polynomial of degree k, 
    // then f(n) is O(n^k).
    // The final result is O(n^2).
    for (var i = 0; i < n*n; i++){}
}

/**
 * JavaScript Numbers
 */

function JavaScriptNumbers() {
    // 0.1 and 0.2 cannot be represented precisely.
    0.1 + 0.2 == 0.3; // false

    // The smallest interval between two representable numbers.
    Number.EPSILON;

    // Rounds down to nearest integer
    Math.floor();
    // Rounds to nearest integer
    Math.round();
    // rounds up to nearest integer
    Math.ceil();

    // floats between 0 and 100
    Math.random() * 100;
    // floats between 5 and 30
    Math.random() * 25 + 5;
    // floats between -100 and -90
    Math.random() * 10 - 100;

    // -Infinity < Number.MIN_SAFE_INTEGER 
    // < Number.MIN_VALUE < 0 < Number.MAX_SAFE_INTEGER 
    // < Number.MAX_VALUE < Infinity
}

function isPrimeInN(n) {
    // less than or equal to 1, return false
    if (n <= 1) {
        return false;
    }

    // divid number by a range between 2 to n-1.
    for (var i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}


/**
 * JavaScript Strings
 */






