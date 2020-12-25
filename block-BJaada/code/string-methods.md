Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)

2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
 let name = "siddharth";
 name.toUpperCase();
 let user = "bittu";
 user.toUpperCase();
 let lastname = "sharma"
 lastname.toUpperCase();
 this method converts string into uppercase letters.
3. `toLowerCase`
let name = "siddharth";
 name.toLowerCase();
 let user = "bittu";
 user.toLowerCase();
 let lastname = "sharma"
 lastname.toLowerCase();
 this method converts string in to lowercase letters.
4. `trim`
let message = "   Hello World   ";
message.trim();
let user = "    bittu   "
user.trim();
let lastname = "   sharma  ";
lastname.trim();
it removes all whitespces from start and end of the string
5. `trimEnd`
let message = "   Hello World   ";
message.trimEnd();// "      Hello World"
it removes all whitespaces from end of string
6. `trimStart`
let message = "   Hello World   ";
message.trimStart();//  "Hello World    "
it removes all whitespaces from start of string
7. `concat`
let user = "sid";
let lastname = "sharma";
user.concat(" ",lastname);
it concatenates the string values.
8. `endsWith`
let user = "siddharth";
user.endsWith("t");
returns true or false whether it ends with specified character or not.
9. `includes`
let message = "this is message"
message.includes("f")
returns true or false whether message is included or not
10. `indexOf`
let message = "Aspiring software engineer"
message.indexOf("Software");
returns index of specified character
11. `lastIndexOf`
let message = "Aspiring software engineer"
message.lastIndexOf("Software");
returns last index of specified character
12. `padEnd`
let username = "siddharth";
username.padEnd(10,$);
adds padding at last
13. `padStart`
let username = "siddharth";
username.padStart();
adds padding at start
14. `repeat`
let username = "Siddharth";
username.repeat(5);
used to repat the string n no of times
15. `replace`
let message = "Hello World";
message.replace("World","All");
used to replace certain word 
16. `slice`
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
citrus
accepts two parameters start index and last index and gives string between these two
17. `split`
let message = "Hello to the world";
message.split('');
used for splitting
18. `substring`
used to take out small portion from string
username.substring(0,3)
