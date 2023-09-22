"use strict";
// // Two Sum: Ssum two integers in an array
// function twoSum(nums: number[], target: number) {
//     for (let i = 0; i < nums.length; i++) {
//       for (let j = i + 1; j < nums.length; j++) { // Added 'j < nums.length' condition
//         if (nums[i] + nums[j] === target) {
//           return [i, j];
//         }
//       }
//     }
//   }
//   let nums = [8, 5, 31, 10];
//   let target = 39;
//   let result = twoSum(nums, target);
//   console.log(result); // Output: [2, 3] (Indices of numbers that add up to the target)
// // Given a string s consisting of words and spaces, return the length of the last word in the string.
//   function lengthOfLastWord(s: string): number {
//     s = s.trim(); // Remove leading and trailing spaces
//     let lastIndex = s.lastIndexOf(' '); // Find the last space
//     if (lastIndex === -1) {
//       return s.length; // If there are no spaces, return the length of the entire string
//     } else {
//       return s.length - lastIndex - 1; // Return the length of the last word
//     }
//   }
//     let s = "Naeem Goraya";
//   const result = lengthOfLastWord(s);
//   console.log(result); // Output: 5
// Remove duplicate
function removeDuplicates(nums) {
    if (nums.length === 0) {
        return 0; // If the array is empty, no duplicates to remove
    }
    let k = 1; // Initialize k to 1, as the first element is always unique
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            // If the current element is different from the previous one
            nums[k] = nums[i]; // Move the current element to the next unique position
            k++; // Increment k to track the unique elements count
        }
    }
    return k; // k now represents the count of unique elements
}
// Example usage:
const nums = [1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 5];
const uniqueCount = removeDuplicates(nums);
console.log(uniqueCount); // Output: 5 (unique elements: [1, 2, 3, 4, 5])
console.log(nums.slice(0, uniqueCount)); // Output: [1, 2, 3, 4, 5]
//   Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
function containsDuplicate(nums) {
    const n = nums.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if (nums[i] === nums[j]) {
                return true; // Found a duplicate
            }
        }
    }
    return false; // No duplicates found
}
// Example usage
console.log(containsDuplicate([1, 2, 3, 1])); // Output: true (1 appears twice)
console.log(containsDuplicate([1, 2, 3, 4])); // Output: false (no duplicates)
// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
// Example 1:
// Input: nums = [2,2,1]
function singleNumber(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[j] !== nums[i + 1]) {
                return nums[j];
            }
        }
    }
}
;
let numsList = [2, 2, 1];
console.log(`The number is `, singleNumber(numsList));
let numsList1 = [4, 1, 2, 1, 2];
console.log(`The number is `, singleNumber(numsList1));
let numsList2 = [1];
console.log(`The number is `, singleNumber(numsList2));
class car {
    constructor() {
        this.company = "not defined";
        this.modelName = "not defined";
        this.price = 0;
    }
}
let car1 = new car();
car1.company = "Honda",
    car1.modelName = "Civic",
    car1.price = 10000000;
let car2 = new car();
car2.company = "Honda",
    car2.modelName = "City",
    car2.price = 5000000;
console.log(car1);
console.log(car2);
class mug {
    constructor() {
        this.material = "undefined";
        this.price = 0;
    }
}
let mug1 = new mug();
mug1.material = "Steel",
    mug1.price = 500;
console.log(mug1);
class pen {
    constructor() {
        this.company = "undefined";
        this.color = "undefined";
        this.price = 0;
    }
}
let pen1 = new pen();
pen1.company = "Parker";
pen1.color = "blue";
pen1.price = 1000;
console.log(pen1);
console.log(car1, car2, mug1, pen1);
class tv {
    constructor(company, price, isUsed) {
        this.company = "undefined";
        this.price = 0;
        this.isUsed = true;
        this.company = company;
        this.price = price;
        this.isUsed = isUsed;
        console.log("starttv");
    }
}
let tv1 = new tv("Sony", 300000, false);
// tv1.company = "Sony",
// tv1.price = 300000,
// tv1.isUsed = false,
console.log(tv1);
let tv2 = new tv("Samsung", 50000, true);
console.log(tv2);
class drink {
    constructor(companyName, drinkName, quantity) {
        this.companyName = "undefined";
        this.drinkName = "undefined";
        this.quantity = 0;
        this.companyName = companyName,
            this.drinkName = drinkName,
            this.quantity = quantity;
    }
}
let drink1 = new drink("Coke", "CocaCola", 100);
console.log(drink1);
