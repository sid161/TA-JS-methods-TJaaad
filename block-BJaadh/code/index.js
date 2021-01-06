// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers
numbers.indexOf(101);

// - Find the last index of `9` in numbers
numbers.lastIndexOf(9);

// - Convert value of strings array into a sentance like "This is a collection of words"
strings.join("");


// - Add two new words in the strings array "called" and "sentance"
strings.push("called");
strings.push("sentence");

strings.splice()

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"
strings.join(" ");

// - Remove the first word in the array (strings)
strings.unshift();

// - Find all the words that contain 'is' use string method 'includes'
let allIs = strings.filter((string) => strings.includes('is'));

// - Find all the words that contain 'is' use string method 'indexOf'
let allIsAgain = strings.filter(
  (string) => string.indexOf("is");
)


// - Check if all the numbers in numbers array are divisible by three use array method (every)
numbers.every((num) => num % 3 === 0);

// -  Sort Array from smallest to largest
numbers.sort((a,b) => a - b);

// - Remove the last word in strings
strings.pop();

// - Find largest number in numbers
let largest = numbers.sort((a,b) => b - a);

// - Find longest string in strings
let longestString = strings
.sort((a,b) => a.length - b.length)
.pop();

// - Find all the even numbers
let even = numbers.filter((num) => num % 2 === 0);

// - Find all the odd numbers
let odd = numbers.filter((num) => num % 2 !== 0);
// - Place a new word at the start of the array use (unshift)
strings.unshift('New word');

// - Make a subset of numbers array [18,9,7,11]
numbers.slice(3,7);

// - Make a subset of strings array ['a','collection']
strings.slice(3,5);

// - Replace 12 & 18 with 1221 and 1881
numbers.splice(numbers.indexOf(12),1,1221);

// - Replace words in strings array with the length of the word
let stringsLength = strings.map((string) => string.length);

// - Find the sum of the length of words using above question
stringsLength.reduce((acc,cv) => {
  acc = acc + cv;
  return acc;
})
// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'
let filteredCustomer = customers.filter((customer) =>
customer.firstname.startsWith("J")
);

// - Create new array with only first name
let firstnameCustomer = customers.map(
  (customer) => customer.firstname
);

// - Create new array with all the full names (ex: "Joe Blogs")
let fullnameCustomer = customers.map(
  (customer) =>
  `${customer.firstname} ${customer.lastname}`
);
// - Sort the array created above alphabetically
[...fullnameCustomer].sort();

// - Create a new array that contains only user who has at least one vowel in the firstname.
let vowelCustomer = customers.filter((customer) => {
  if (
    customer.firstname.toLowerCase().includes("a")
    customer.firstname.toLowerCase().includes("e")
    customer.firstname.toLowerCase().includes("i")
    customer.firstname.toLowerCase().includes("o")
    customer.firstname.toLowerCase().includes("u")

  ){
    return true;
  } else{
    return false;
  }
})
