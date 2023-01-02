// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples 
// of 3 and 5
// ex: 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz

const fizzbuzzer = function() {
  let count = 1;
  while (count <= 100) {
    let value = "";
    if (count % 3 === 0) {
      value += "fizz";
    }
    if (count % 5 === 0) {
      value += "buzz";
    }
    if (value === "") {
      value = count;
    }
    console.log(value);
    count++;
  }
}

fizzbuzzer();