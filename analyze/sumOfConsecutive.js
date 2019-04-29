i = 1
f = isSumOfConsecutive2 = n => i++ < n ? !(n % ++i) + f(n) : 0

/* https://oeis.org/A069283
 * "a(14) = 1 because the divisors of 14 are 1, 2, 7, 14, and of these, two are odd, 1 and 7, and -1 + 2 = 1.
 *  a(15) = 3 because the divisors of 15 are 1, 3, 5, 15, and of these, all four are odd, and -1 + 4 = 3.
 *  a(16) = 0 because 16 has only one odd divisor, and -1 + 1 = 0.
 *  Using Ant King's formula: a(90) = 5 as 90 = 2^1 * 3^2 * 5^1, so a(90) = (1 + 2) * (1 + 1) - 1 = 5.
 *  - Giovanni Ciriani, Jan 12 2013"
 *
 * so it's count of odd divisors - 1
 */