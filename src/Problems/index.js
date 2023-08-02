Problems;
// Missing Array element

const arr = [1, 3, 4, 6, 7, 9, 10, 12, 13, 15];

function missingArray(arr) {
  const x = Math.max(...arr);
  const y = Math.min(...arr);
  const newArr = [];
  const missArr = [];
  const obj1 = {};
  const obj2 = {};

  for (let val of arr) {
    if (!obj1[val]) {
      obj1[val] = 1;
    } else {
      obj1[val] += 1;
    }
  }

  for (let i = y; i <= x; i++) {
    // arr.includes(i)==false?newArr.push(i):null;
    if (!obj2[i]) {
      obj2[i] = 1;
    } else {
      obj2[i] += 1;
    }
  }

  for (let key in obj2) {
    if (!(key in obj1)) {
      missArr.push(Number(key));
    }
  }
  // console.log(newArr);
  return missArr;
}

// missingArray(arr);
console.log(missingArray(arr));

// Output: "fl"

const strs = ["flower", "flow", "fight"];

const alphabet = [];
function matchingAlphabet(strs) {
  for (let val of strs) {
    // console.log((val[0].concat(val[1]))=="fl")
    if (val[0].concat(val[1]) === "fl") {
      // console.log(val[0].concat(val[1]));
      alphabet.push(val[0].concat(val[1]));
    } else {
      // console.log("false");
      return false;
    }
  }
}

// matchingAlphabet(strs);
console.log(matchingAlphabet(strs));
console.log(alphabet);

//To create a new array where every element of the original array is paired with the next element

let outerArr = [1, 2, 3, 4, 5, 6, 7, 8];

function separateArr(arr) {
  let innerArr = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (i + 1 < arr.length) {
      innerArr.push([arr[i], arr[i + 1]]);
    } else {
      innerArr.push([arr[i]]);
    }
  }
  console.log(innerArr);
}

separateArr(outerArr);

//get all fibonacci sequence

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

function setOfFib(n) {
  let allFib = [];
  for (let i = 1; allFib.length < n; i++) {
    allFib.push(fib(i));
  }
  return allFib;
}

// setOfFib(10)
console.log(setOfFib(10));
