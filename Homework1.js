Input = "Hello world! I am Fullstack Developer";
InputArray = Input.split(" ");

// console.log(InputArray);

let longest = InputArray[0].length;

for (let i = 0; i < InputArray.length; i++) {
  if (longest < InputArray[i].length) {
    longest = InputArray[i];
  }
}

console.log(InputArray);
console.log(longest);
