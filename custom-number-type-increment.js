// custom-number-type-increment
console.log('$ node custom-number-type-increment.js');

/* TypeScript like pseudocode => adapt to JavaScript
 *
 * type Digit = char;
 * type Number = Digit[];
 *
 * digits = ['0','1','2','3','4','5','6','7','8','9']; 
 *
 * // Increment a Digit and say if it carries 
 * next(d: Digit): {digit: Digit, carry: Boolean/bit} {
 *   digit = digits[d + 1]; // incr. pointer
 *   return {
 *     digit: digit | '0',
 *     carry: !digit  // TODO: check 1) digits[10] evaluates to False, 2) '0' evaluates to True
 *   }
 * }
 *
 * // Increment a Number
 * increment(n: Number): Number {
 *   for (i = 0; i < Number.length(); i++) {
 *     next = next(Number[i]);
 *     Number[i] = next.digit;
 *     if (!next.carry) { // "while" would have been OK too
 *       break;
 *     }
 *   }
 *   return n;
 * }
 *
 * // Print the Number
 * print(n: Number): void {
 *   pBuf = '';
 *   for (i = n.length() - 1; i > -1; i--) {
 *     pBuf += n[i];
 *   }
 *   console.log(pBuf);
 * }
 *
 * // Load a number
 * load(s: String): Number {
 *   n: Number = [];
 *   for (i = s.length(); i > -1; i++) {
 *     n.append(s[i]);
 *   }
 *   return n; 
 * }
 *
 * tests(): void {
 *   // 0, 1, 9, 15, 39, 99
 *   print(increment(load(0)));
 *   print(increment(load(1)));
 *   print(increment(load(9)));
 *   print(increment(load(15)));
 *   print(increment(load(39)));
 *   print(increment(load(99)));
 * }
 */
