let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// Create an array peopleName and store value of sex key from persons array
 let peopelName = persons.map(person => person.name);
// Create an array peopleGrade and store the value of grade key from persons array
let peopleGrade = persons.map(person => person.grade);


// Create an array peopleSex and store the value of sex key from persons array
let peopleSex = persons.map(person => person.sex);

// Log the filtered named of people in peopleName that starts with 'J' or 'P'
console.log(peopelName.filter((name) => name.startsWith("J") || name.startsWith("P"))
);

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'
console.log(peopelName.filter(name) => name.startsWith("A") || name.startsWith("C")).length

// Log all the filtered male ('M') in persons array
console.log(
  persons.filter((person) => person.sex == "M")
);

// Log all the filtered female ('F') in persons array
console.log(
  persons.filter((person) => person.sex == "F")
);

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array
console.log(persons.filter((person) => person.sex == "F")
.filter(
  (person) => 
  person.name.startsWith("C") ||
  person.name.startsWith("J")
)
);

// Log all the even numbers from peopleGrade array
console.log(peopleGrade.filter((n) => n % 2 === 0));

// Find the first name that starts with 'J' in persons array and log the object
persons.find(person => person.name.startsWith('J'));

// Find the first name that starts with 'P' in persons array and log the object
persons.find(person => person.name.startsWith('P'));

// Find the first name that starts with 'J', grade is greater than 10 and is a female
persons.find(person => person.name.startsWith('J') && person.grade > 10 && person.sex === "F")

// Filter all the female from persons array and store in femalePersons array
let femalePersons = persons.filter(person => person.sex === "F"); 

// Filter all the male from persons array and store in malePersons array
let malePersons = persons.filter(person => person.sex === "M");

// Find the sum of all grades and store in gradeTotal
let gradeTotal = peopleGrade.reduce(
  (acc,cv) => acc + cv;
  0
)

// Find the average grade
gradeTotal / peopleGrade.length;

// Find the average grade of male
let maleGrad = persons.filter((p) => p.sex === "M");
maleGrad.reduce((acc,cv) => {
  return acc + cv.grade;
}, 0) / maleGrade.length

// Find the average grade of female
let femaleGrad = persons.filter((p) => p.sex === "F");
femaleGrad.reduce((acc,cv) => {
  return acc + cv.grade;
}, 0) / femaleGrade.length

// Find the highest grade
[...peopleGrade].sort((a,b) => a - b).pop();

// Find the highest grade in male
[...maleGrade].sort((a,b) => a -b).pop();

// Find the highest grade in female
[...femaleGrad].sort((a,b) => a - b).pop();

// Find the highest grade for people whose name starts with 'J' or 'P'
let nameWithJorP = persons.filter((person) => 
person.name.startsWith("J") ||
person.name.startsWith("P")
 );
 let gradeWithJorP = nameWithJorP.map((person) => person.grade);
 [...gradeWithJorP].sort((a,b) => a - b);

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?
peopleGrade.sort((a,b) => a - b);
// Sort the peopleGrade in descending order
peopleGrade.sort((a,b) => b - a);

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array
[...peopleGrade].sort((a,b) => b - a);

// Sort the array peopelName in ascending `ABCD..Za....z`
peopelName.sort();

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
[...peopelName].sort();
