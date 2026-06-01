3300. Minimum Element After Replacement With Digit Sum

You are given an integer array nums.

You replace each element in nums with the sum of its digits.

Return the minimum element in nums after all replacements.

 

Example 1:

Input: nums = [10,12,13,14]

Output: 1

Explanation:

nums becomes [1, 3, 4, 5] after all replacements, with minimum element 1.
-------------------------------------------------------------------------

Mathematical tricks notes:

1. Check if number is even/odd

8 % 2 === 0 // even
7 % 2 === 1 // odd
------------------------

2. Count digits

let count = 0;

while (n > 0) {
    count++;
    n = Math.floor(n / 10);
}
---------------------------

3. Reverse a number

1234 → 4321

let reversed = 0;

while (n > 0) {
    reversed = reversed * 10 + (n % 10);
    n = Math.floor(n / 10);
}
-------------------------

4. Palindrome Number

121 → true
123 → false

Reverse the number and compare.
----------------------------------

5. Extract individual digits

while (n > 0) {
    console.log(n % 10);
    n = Math.floor(n / 10);
}
--------------------------------

6. Check if a number contains a digit

Example: does 12345 contain 4?

while (n > 0) {
    if (n % 10 === 4) {
        return true;
    }

    n = Math.floor(n / 10);
}
-----------------------------

8. GCD (Greatest Common Divisor)

refer to euclidean algorithm snapshot attached.
----------------------------------

9. Prime Number Check

Why loop only to the square root?Factors always exist in pairs. For any pair (a, b) where (a * b = num), one of the factors must be less than or equal to sqrt(num). If no factor is found by that point, the number is guaranteed to be prime

function isPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}








