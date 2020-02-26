// 1)

let number = +prompt("Enter the n-th number", "");
    
 function fibonacci(number) {
   let arr = [];
   let a = 0;
   let b = 1;
   let c = a;
    
   for (let i = 0; c <= number; i++) {
     arr.push(c);
     c = a + b;
     a = b;
     b = c;
   }
   return(arr);
 }
 alert(fibonacci(number));

 //------------------------------------------------------------------------------------------//

 // 2)

let number = Math.abs(+prompt("Enter a number", ""));
    
function prodSum(number) {
  if (number === 0) {
    return("Can't calculate")
  } else {
    let prod = 1;
    let sum = 0;
    
    while (number) {
      let digit = (number % 10);
      prod *= digit;
      sum += digit;
      number = Math.floor(number / 10);
    }
    
    if (prod % sum) {
      return(`Remainder is ${prod % sum}`);
    } else {
      return(`Quotient is ${prod / sum}`);
    }  
  }  
 }
    
 alert(prodSum(number));

 //------------------------------------------------------------------------------------------//

 // 3)

let arr = [];
let next;

function minMaxDiffInclude(arr) {
  while (next != 0) {
    arr.push(+prompt("Fill the array with numbers", ""));
    next = confirm("Anything else?");
  }
  alert(`Your array is ${arr}`);

  let max = arr[0];
  let min = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i]
    } else if (arr[i] <= min) {
      min = arr[i];
    }
  }

  if (arr.includes(max - min)) {
    return(true);
  } else {
    return(false);
  }  
}

alert(minMaxDiffInclude(arr));

//------------------------------------------------------------------------------------------//

//4)

let arr = [];
    
function secondMax(arr) {
  let arr1 = [];
  let next;

  while (next != 0) {
    arr.push(+prompt("Fill the array with numbers", ""));
    next = confirm("Anything else?");
  }
  alert(`Your array is [${arr}]`);

  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i]);
  }

  function compare(a, b) {
    return a - b;
  }

  arr1 = arr1.sort(compare);

  let second_max = (arr1[arr1.length - 2]);
  return(arr.indexOf(second_max));
}

alert(secondMax(arr));

//------------------------------------------------------------------------------------------//

// 5)

let arr = [];
let next;

while (next != 0) {
  arr.push(+prompt("Fill the array with numbers", ""));
  next = confirm("Anything else?");
}

alert(`Your array is ${arr}`);

function padArray(arr) {
  let start = [];
  let start_new = [];
  let end = [];
  let end_new = [];
  let pad = +prompt("Enter the padding amount", "");
  let repeat = +prompt("Enter how many times to repeat", "");

  if (pad > arr.length) {
    return("Invalid padding amount");
  } else {
    start = arr.slice(0, pad);
    end = arr.slice((arr.length - pad), arr.length);

    for (let j = repeat; j > 0; j--) {
      start_new.push(start);
      end_new.push(end);
    }

    for (let i = (start_new.length - 1); i >= 0; i--) {
      arr.unshift(start_new[i]);
      arr.push(end_new[(end_new.length - 1) - i]);
    }

  return(arr);
  }
}
alert(padArray(arr));

//------------------------------------------------------------------------------------------//

// 6)

let side = +prompt("Enter a number", "");

function rectangle(side) {
  let str = "";

  for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
      str += " * "
    }
    str += "<br>";
  }
  return(str);  
}
document.write(rectangle(side));

//------------------------------------------------------------------------------------------//

// 7)

let side = +prompt("Enter a number", "");
let edge = ' * ';
let inside = "   ";
let pattern;

for (let i = 1; i <= side; i++) {
  if (i === 1 || i === side) {
      pattern = Array(side + 1).join(edge);
  } else {
      pattern = edge + Array(side - 1).join(inside) + edge;
  }
  console.log(pattern);  		 //It's written without enters so it's 
}                         		 //visible in console tab of Chrome.

// or Maybe this way

// let side = +prompt();

// for (let i = 0; i < side; i++) {
//   for (let j = 0; j < side; j++) {
//     if (i == 0 || i == side - 1 || j == 0 || j == side - 1) {
//       console.log(" * "); 
//     } else {
//       console.log("   ");
//     }
//   }
//   console.log("\n");
// }

//------------------------------------------------------------------------------------------//

// 8)

let number = +prompt("Enter a number", "");

function numPattern(number) {
  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(`${j}`);
    }
    document.write("<br>");
  }

  for (let k = number - 1; k>= 1; k--) {
    for (let l = 1; l <= k; l++) {
      document.write(`${l}`); 
    }
    document.write("<br>");
  }  
}
numPattern(number);