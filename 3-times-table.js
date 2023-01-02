// Given a number, print out a multiplication table up to and including that number

// table(3)

// 1, 2, 3
// [
//   1[1, 2, 3],
//   2[2, 4, 6],
//   3[3, 6, 9],
//  ]

const createMultTable = function(num) {
  let multTable = [];
  // push one row
  // push the index starting at 0
  // push additional numbers which are the multiplication of the outer index and inner index starting at 0
  // stop when the length is equal the number provided
  let outerRow = []
  for (let k = 0; k <= num; k++) {
    outerRow.push(k)
  }
  multTable.push(outerRow)
  for (let i = 1; i <= num; i++) {
    let tableRow = [i];
    for (let j = 1; j <= num; j++) {
      tableRow.push(i * j);
    }
    multTable.push(tableRow);
  }
  return multTable;
}


/////////


[
  [0, 1, 2, 3],
  [1, 1, 2, 3],
  [2, 2, 4, 6],
  [3, 3, 6, 9]
]