function fizzBuzz(n) {
    if (n < 1) {
        return;
    }
    for (i = 1; i < n + 1; i++) {
    console.log(
        !(i % 3) ?
            'Fizz' + (!(i % 5) ?  // modulus 3
                'Buzz'            // modulus 3 and 5
                : '')             // modulus 3 and not 5
            : (!(i % 5) ?         // not modulus 3
                'Buzz'            // modulus 5 and not 3
                : i)               // not modulus 5 nor 3
        );
    }
}

function tests() {
    fizzBuzz(1);
    fizzBuzz(10);
    fizzBuzz(42);
}

tests();