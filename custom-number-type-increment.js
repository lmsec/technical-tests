// Usage: $ node custom-number-type-increment.js

digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // Key-Digit mapping

// Increment a Digit and say if it carries 
function nextKey(dKey) {
    const digit = digits[dKey + 1]; // increment pointers, not digits
    return {
        dKey: !digit ? 0 : dKey + 1,
        carry: !digit
    }
}

// Increment a Number
function increment(n) {
    let next;
    for (i = 0; i < n.length; i++) {
        next = nextKey(n[i]);
        n[i] = next.dKey;
        if (!next.carry) {
            break;
        }
    }
    if (!!next.carry) {
        n.push(1); // numbers such as 9, 99, etc.
    }
    return n;
}

// Print the Number
function print(n) {
    let pBuf = '';
    for (i = n.length - 1; i > -1; i--) {
        pBuf += digits[n[i]];
    }
    console.log(pBuf);
}

// Load a number
function load(s) {
    const n = [];
    for (i = s.length - 1; i > -1; i--) {
        n.push(digits.indexOf(s[i]));
    }
    return n;
}

function tests() {
    // 0, 1, 9, 15, 39, 99
    print(increment(load('0')));
    print(increment(load('1')));
    print(increment(load('9')));
    print(increment(load('15')));
    print(increment(load('39')));
    print(increment(load('99')));
}

tests();