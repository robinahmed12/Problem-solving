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

// ------------------------------------------------------------
// Problem 10: Running Sum of 1D Array
// runningSum[i] = sum of nums[0..i]. Returns a new array,
// the input is not modified.
//
// Time:  O(n)
// Space: O(n) for the returned array
// ------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums: number[]): number[] {
  const result: number[] = [];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    result.push(sum);
  }
  return result;
};

// ------------------------------------------------------------
// Problem 11: Richest Customer Wealth
// Max over all customers (rows) of the sum of their accounts.
//
// Time:  O(m * n) — every account value visited once
// Space: O(1)
// ------------------------------------------------------------
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts: number[][]): number {
  let max = 0;
  for (const row of accounts) {
    let wealth = 0;
    for (const amount of row) wealth += amount;
    if (wealth > max) max = wealth;
  }
  return max;
};

// ------------------------------------------------------------
// Problem 12: Remove Duplicates from Sorted Array (in-place)
// Two pointers: `write` marks where the next unique value goes;
// `read` scans forward. On encountering a new unique value,
// write it at write++ . Returns k = number of unique values.
// No extra array is created.
//
// Time:  O(n)
// Space: O(1)
// ------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums: number[]): number {
  if (nums.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[write - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }
  return write;
};

// ------------------------------------------------------------
// Problem 13: Contains Duplicate
// A Set tracks seen values; the first repeat returns true.
//
// Time:  O(n)
// Space: O(n) for the set
// ------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums: number[]): boolean {
  const seen = new Set<number>();
  for (const num of nums) {
    if (seen.has(num)) return true;
    seen.add(num);
  }
  return false;
};

// ------------------------------------------------------------
// Problem 14: Move Zeroes (in-place, void)
// Two pointers: `write` chases `read`, copying every non-zero
// element forward in order; remaining positions are then
// filled with zeros. No extra array is created.
//
// Time:  O(n)
// Space: O(1)
// ------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {void}
 */
var moveZeroes = function (nums: number[]): void {
  let write = 0;
  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      nums[write++] = nums[read];
    }
  }
  while (write < nums.length) {
    nums[write++] = 0;
  }
};

// ------------------------------------------------------------
// Problem 15: Merge Sorted Array (in-place, void)
// Merge backwards: place the largest remaining value at the
// last free position of nums1. Going from the end avoids
// overwriting unprocessed elements of nums1.
//
// Time:  O(m + n)
// Space: O(1)
// ------------------------------------------------------------
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1; // last real element of nums1
  let j = n - 1; // last element of nums2
  let pos = m + n - 1; // last position of nums1

  while (j >= 0) {
    if (i >= 0 && nums1[i] > nums2[j]) {
      nums1[pos] = nums1[i];
      i--;
    } else {
      nums1[pos] = nums2[j];
      j--;
    }
    pos--;
  }
};

// ------------------------------------------------------------
// Problem 16: 3Sum
// Sort, then fix the first element nums[i] and scan with two
// pointers (left/right). Skipping equal adjacent values at all
// three positions guarantees unique triplets. Each element is
// used at most once per triplet since the pointers move
// monotonically.
//
// Time:  O(n^2) — O(n log n) sort + O(n) two-pointer sweep
//        per fixed i
// Space: O(sort) — the output array is not counted
// ------------------------------------------------------------
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums: number[]): number[][] {
  const result: number[][] = [];
  const sorted = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < sorted.length - 2; i++) {
    if (sorted[i] > 0) break; // all remaining sums would be positive
    if (i > 0 && sorted[i] === sorted[i - 1]) continue; // skip duplicate anchor

    let left = i + 1;
    let right = sorted.length - 1;
    while (left < right) {
      const sum = sorted[i] + sorted[left] + sorted[right];
      if (sum < 0) left++;
      else if (sum > 0) right--;
      else {
        result.push([sorted[i], sorted[left], sorted[right]]);
        left++;
        right--;
        while (left < right && sorted[left] === sorted[left - 1]) left++;
        while (left < right && sorted[right] === sorted[right + 1]) right--;
      }
    }
  }
  return result;
};

// ------------------------------------------------------------
// Problem 17: Plus One
// Walk from the least significant digit; a digit that is not
// 9 just needs +1 (carry done). All trailing 9s become 0s and
// the carry finally produces a leading 1, so the array grows
// by one digit in that case.
//
// Time:  O(n)
// Space: O(1) extra when no full carry, O(n) for the grown
//        array case ([9..9] -> [1, 0, .., 0])
// ------------------------------------------------------------
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0; // carry continues
  }
  return [1, ...digits]; // every digit was 9
};

// ------------------------------------------------------------
// Problem 18: Reverse String (in-place, void)
// Two pointers swap characters moving toward each other from
// the ends. No extra array is created.
//
// Time:  O(n)
// Space: O(1)
// ------------------------------------------------------------
/**
 * @param {string[]} s
 * @return {void}
 */
var reverseString = function (s: string[]): void {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const tmp = s[left];
    s[left] = s[right];
    s[right] = tmp;
    left++;
    right--;
  }
};

// ------------------------------------------------------------
// Problem 19: Length of Last Word
// Trim trailing spaces, then count characters from the end
// until the next space. This naturally skips leading spaces
// and any multiple/extra spaces between words.
//
// Time:  O(n)
// Space: O(1)
// ------------------------------------------------------------
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s: string): number {
  let i = s.length - 1;
  while (i >= 0 && s[i] === ' ') i--; // skip trailing spaces
  let count = 0;
  while (i >= 0 && s[i] !== ' ') {
    count++;
    i--;
  }
  return count;
};

// ------------------------------------------------------------
// Problem 20: Longest Common Prefix
// Start from the first string as the candidate prefix, then
// shrink it until every string starts with it. Short-circuit
// on an empty string.
//
// Time:  O(S) — S = sum of all characters across all strings
// Space: O(1) extra (the returned prefix is the result)
// ------------------------------------------------------------
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs: string[]): string {
  if (strs.length === 0) return '';
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (prefix === '') return '';
    }
  }
  return prefix;
};
