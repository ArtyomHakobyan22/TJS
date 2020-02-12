// 1)

let a = +prompt("Enter the FIRST number", "");
let b = +prompt("Enter the SECOND number", "");
let c = +prompt("Enter the THIRD number", "");
    
switch (true) {
  case a > 0 && b > 0 && c > 0:
  case a > 0 && b < 0 && c < 0:
  case a < 0 && b > 0 && c < 0:
  case a < 0 && b < 0 && c > 0:
    alert("+");
    break;
  case a < 0 && b < 0 && c < 0:
  case a < 0 && b > 0 && c > 0:
  case a > 0 && b < 0 && c > 0:
  case a > 0 && b > 0 && c < 0:
    alert("-");
    break;
  case a == 0 || b == 0 || c == 0:
    alert("0");
    break;
  }

//--------------------------------------------------------------------//

// 2)

let a = +prompt("Enter a number","");
let b = +prompt("Enter a digit", "");
let arr = [];
    
while (a) {
  let digit = a % 10;
  a = Math.floor(a / 10);
  arr.push(digit);
}
    
if (arr.includes(b)) {
        alert("Yes");
  } else {
    alert("No");
  }

//--------------------------------------------------------------------//

// 3)

let a = +prompt("Enter a number", "");
let arr = [];
    
if (a < 10) {
  alert(a);
} else {
  while (a) {
  let digit = a % 10;
  a = Math.floor(a / 10);
  arr.unshift(digit);
}
    
const first = arr[0];
const last = arr[arr.length - 1];
    
arr.shift();
arr.pop();
arr.unshift(last);
arr.push(first);
    
alert(arr.join(''));
}

//------------------------------------------------------------//

// 4)

let a = +prompt("Enter the FIRST number", "");
let b = +prompt("Enter the SECOND number", "");
let c = +prompt("Enter the THIRD number", "");
let arr = [];
    
switch (true) {
  case c > a &&  c > b && a > b:
    arr.unshift(b, a, c,);
    alert(arr);
    break;
  case a > b && a > c && b > c:
    arr.unshift(c, b, a);
    alert(arr);
    break;
  case a > c && a > b && c > b:
    arr.unshift(b, c, a);
    alert(arr);
    break;
  case b > a && b > c && a > c:
    arr.unshift(c, a, b);
    alert(arr);
    break;
  case b > c && c > a && c > a:
    arr.unshift(a, c, b);
    alert(arr);
    break;
  case c > b && c > a && b > a:
    arr.unshift(a, b, c);
    alert(arr);
    break;
}

//-----------------------------------------------------------//

// 5)

const a = +prompt("Enter value for a", "");
const b = +prompt("Enter value for b", "");
const c = +prompt("Enter value for c", "");
let root1, root2;
    
if (a == 0) {
  alert("Please, enter valid constants")
} else {
    let determinant = (Math.pow(b, 2)) - 4 * a * c;
  if (determinant > 0) {
    root1 = (- b + (Math.sqrt(determinant))) / (2 * a);
    root2 = (- b - (Math.sqrt(determinant))) / (2 * a);
    alert(`Solutions are ${root1} and ${root2}`);
  } else if (determinant == 0) {
    root1 = (-b) / (2 * a);
    alert(`Solution is ${root1}`);
  } else if (determinant < 0) {
    alert("Solution does not exist");
  }
}

//---------------------------------------------------//

// 6)

let n = +prompt();
    
let i = 0;
let j = 0;
    
if (n % 2 === 0 && (!Math.floor(n / 10))) {
  i +=1;
}
    
if (n % 3 === 0 && n % 10 === 1) {
  j +=1;
}
    
alert(i);
alert(j);

//-------------------------------------------------------//

// 7)

let figure = prompt("Enter the type of the figure(Triangle or Rectangle)", "");
let height, base, side1, side2, area;
    
if (figure == "triangle" || figure == "Triangle") {
  height = +prompt("Enter the height", "");
  base = +prompt("Enter the base", "");
  if (height <= 0 || base <= 0) {
    alert("Please enter only positives not equal to zero");
  } else {
    area = (height * base) / 2;
    alert(`The square is equal to ${area}`);
  }
} else if (figure == "rectangle" || figure == "Rectangle") {
  side1 = +prompt("Enter the length", "");
  side2 = +prompt("Enter the width", "");
  if (side1 <= 0 || side2 <= 0) {
    alert("Please enter only positives not equal to zero");
  } else {
    area = side1 * side2;
    alert(`The square is equal to ${area}`); 
  }
}

//---------------------------------------------------------------------------//

// 8)

let number = +prompt("Enter the number", "");
if (number < 10 || number == 0){
  alert(`The difference between the biggest and the smallest digit is ${number}`)
} else {
  let arr = [];
    
while (number) {
  digit = number % 10;
  number =  Math.floor(number / 10);
  arr.unshift(digit);
}
    
let biggest = arr[0];
let smallest = arr[0];
    
for (let i = 0; i < arr.length; i++) {
  let temp = arr[i];
  if (temp > biggest) {
    biggest = arr[i];
  } else if (temp < smallest) {
    smallest = arr[i];
  }
}
    
let difference = biggest - smallest;
alert(`The difference between the biggest and the smallest digit is ${difference}`);
}
