Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();
join method joins array
no it does not mutate original array
3. `flat`
let numbers = [1,2,[3,4,[5,6,[7,8]]]];
numbers.flat(4);
flat is used to create flat strutchure of array
no it does not mutates
4. `push`
let colors = ["Black","brown","red","green","white"]
array.push();
push method is use to add an element in array at last
 it  mutates array
5. `indexOf`
let colors = ["Black","brown","red","green","white"];
colors.indexof('white');
indexof method is used to find index of particular element of array
no it does not mutate
6. `lastIndexOf`
let colors = ["Black","brown","red","green","white"];
colors.lastIndexOf('white');
it finds last index of element of array
no it does not mutate
7. `includes`
let colors = ["Black","brown","red","green","white"];
colors.includes('white');
it determines whether particular element is included in array or not
8. `reverse`
let colors = ["Black","brown","red","green","white"];
colors.reverse();
it reverses the array
it mutates array
9. `every`
let colors = ["Black","brown","red","green","white"];
let retcolors = colors.every(function(color)){
  return color.includes("red");
}
The every() method tests whether all elements in the array pass the test implemented by the provided function.
it returns true or false value it should return every value as true to return true values
no it does not mutate

10. `shift`
let colors = ["Black","brown","red","green","white"];
colors.shift();
use to shift element it deletes 0th index and shifts other elements in lower index
11. `splice`
splice is used to remove specific element in array
let colors = ["Black","brown","red","green","white"];
colors.splice();
it mutates
12. `find`
let colors = ["Black","brown","red","green","white"];
colors.find('Black');
it finds particular element in array and returns true or false
13. `unshift`
let colors = ["Black","brown","red","green","white"];
colors.shift("violet");
used to add element at start of array.
it mutates
14. `findIndex`
let colors = ["Black","brown","red","green","white"];
colors.findIndex("red");
used to find index of particular element
no it does not mutate
15. `filter`
let num = [1,3,5,6,8,13,16,18,23]
function isEven(num){
  return num%2 === 0;
} 
num.filter(isEven);
used to filter elements of array according to condition
16. `flat`
let colors = ["Black","brown","red",["green","white"]];
color.flat use to flat the strutchure of array
17. `forEach`
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}
The forEach() method calls a function once for each element in an array, in order
it does not mutates
18. `map`
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
document.getElementById("demo").innerHTML = x;
The map() method creates a new array with the results of calling a function for every array element.

The map() method calls the provided function once for each element in an array, in order.
19. `pop`
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
The pop() method removes the last element of an array, and returns that element.
20. `reduce`
var numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
The reduce() method reduces the array to a single value.
21. `slice`
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
the slice() method returns the selected elements in an array, as a new array object.
22. `some`
