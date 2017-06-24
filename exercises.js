//Do not change any of the function names

function getBiggest(x, y) {
  return x > y ? x : y;
}

function greeting(language) {
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'English') {
    return 'Hello!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else {
    return 'Hello!';
  }
}

function isTenOrFive(num) {
  return num === 10 || num === 5;
}

function isInRange(num) {
  return num < 50 && num > 20;
}

function isInteger(num) {
  return num === Math.floor(num);
}

function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return('fizzbuzz');
  } else if (num % 3 === 0) {
    return('fizz');
  } else if (num % 5 === 0) {
    return('buzz');
  } else {
    return num;
  }
}

function isPrime(n) {
  if (n === 0 || n === 1 || n === 2) {
    return false;
  } for (var i = 2; i < n; i++) {
    return n % i === 0 ? false : n !== 1;
  }
}

function returnFirst(arr) {
  return arr.shift();
}

function returnLast(arr) {
  return arr.pop();
}

function getArrayLength(arr) {
  return arr.length;
}

function incrementByOne(arr) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    arr2.push(arr[i] + 1);
  } 
  return arr2;
}

function addItemToArray(arr, item) {
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  return words.join(' ');
}

function contains(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  } return false;
}

function addNumbers(numbers) {
  var sum = 0;
  for (var i = 0; i <numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function averageTestScore(testScores) {
  var sum = 0;
  for (var i = 0; i < testScores.length; i++) {
    sum += testScores[i];
  }
  return sum / testScores.length;
}

function largestNumber(numbers) {
  var largest = 1;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
