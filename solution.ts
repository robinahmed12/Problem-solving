// ============================================================
// STN-7 Problem Solving Assessment — Solutions
// ============================================================

// ------------------------------------------------------------
// Problem 1: Staircase
// Build a right-aligned staircase of '#' with n rows.
// Row i (1-indexed) has (n - i) leading spaces followed by i '#'.
// Rows are joined with '\n' and no row has trailing spaces.
//
// Time:  O(n^2) — the output itself has n(n+1)/2 characters
// Space: O(n^2) for the result string
// ------------------------------------------------------------
/**
 * @param {number} n
 * @return {string}
 */
var staircase = function (n: number): string {
  const rows: string[] = [];
  for (let i = 1; i <= n; i++) {
    rows.push(' '.repeat(n - i) + '#'.repeat(i));
  }
  return rows.join('\n');
};

// ------------------------------------------------------------
// Problem 2: Grading Students
// Round each grade up to the next multiple of 5 when that
// multiple is less than 3 away; grades below 38 stay unchanged.
//
// Time:  O(n)
// Space: O(n) for the returned array
// ------------------------------------------------------------
/**
 * @param {number[]} grades
 * @return {number[]}
 */
var gradingStudents = function (grades: number[]): number[] {
  return grades.map((grade) => {
    if (grade < 38) return grade;
    const nextMultipleOf5 = Math.ceil(grade / 5) * 5;
    if (nextMultipleOf5 - grade < 3) return nextMultipleOf5;
    return grade;
  });
};

// ------------------------------------------------------------
// Problem 3: Time Conversion
// Convert "hh:mm:ssAM/PM" (12-hour) to "HH:MM:SS" (24-hour).
// Special cases: 12AM -> 00, 12PM -> 12, other PM -> +12,
// other AM -> unchanged.
//
// Time:  O(1) — input length is fixed
// Space: O(1)
// ------------------------------------------------------------
/**
 * @param {string} s
 * @return {string}
 */
var timeConversion = function (s: string): string {
  const period = s.slice(-2); // "AM" | "PM"
  const hh = parseInt(s.slice(0, 2), 10);
  const rest = s.slice(2, 8); // ":mm:ss"

  let hours = hh;
  if (period === 'AM') {
    if (hh === 12) hours = 0; // 12:xx:xxAM -> 00:xx:xx
  } else if (hh !== 12) {
    hours = hh + 12; // 01-11 PM -> 13-23
  }

  return `${String(hours).padStart(2, '0')}${rest}`;
};

// ------------------------------------------------------------
// Problem 4: String Repeat
// Repeat string s exactly n times; n = 0 returns "".
// Preserves character order of s.
//
// Time:  O(n * |s|) — size of the output
// Space: O(n * |s|) for the result string
// ------------------------------------------------------------
/**
 * @param {number} n
 * @param {string} s
 * @return {string}
 */
var repeatStr = function (n: number, s: string): string {
  return s.repeat(Math.max(0, n));
};

// ------------------------------------------------------------
// Problem 5: Reversed Strings
// Return a new string with the characters of str in reverse
// order. The original string is not modified (strings are
// immutable in JS).
//
// Time:  O(|str|)
// Space: O(|str|) for the result string
// ------------------------------------------------------------
/**
 * @param {string} str
 * @return {string}
 */
var solution = function (str: string): string {
  return str.split('').reverse().join('');
};

// ------------------------------------------------------------
// Problem 6: Sum of Positive
// Sum only the numbers strictly greater than zero.
// Empty array or no positives -> 0.
//
// Time:  O(n)
// Space: O(1)
// ------------------------------------------------------------
/**
 * @param {number[]} arr
 * @return {number}
 */
var positiveSum = function (arr: number[]): number {
  return arr.reduce((sum, x) => (x > 0 ? sum + x : sum), 0);
};

// ------------------------------------------------------------
// Problem 7: Grasshopper — Summation
// Sum of all integers from 1 to num inclusive.
// Uses the closed-form formula n*(n+1)/2.
//
// Time:  O(1)
// Space: O(1)
// ------------------------------------------------------------
/**
 * @param {number} num
 * @return {number}
 */
var summation = function (num: number): number {
  return (num * (num + 1)) / 2;
};

// ------------------------------------------------------------
// Problem 8: Convert a Boolean to a String
// true -> "true", false -> "false". Result must be a string.
//
// Time:  O(1)
// Space: O(1)
// ------------------------------------------------------------
/**
 * @param {boolean} b
 * @return {string}
 */
var booleanToString = function (b: boolean): string {
  return b ? 'true' : 'false';
};

// ------------------------------------------------------------
// Problem 9: Fizz Buzz
// For i = 1..n: "FizzBuzz" if divisible by 15 (checked first),
// "Fizz" if by 3, "Buzz" if by 5, else String(i).
//
// Time:  O(n)
// Space: O(n) for the result array
// ------------------------------------------------------------
/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n: number): string[] {
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) result.push('FizzBuzz');
    else if (i % 3 === 0) result.push('Fizz');
    else if (i % 5 === 0) result.push('Buzz');
    else result.push(String(i));
  }
  return result;
};
