// 1)

let str = "May the _ _ _ _.";
let arr = ["Force", "be", "with", "you"];
    
function wordInsert(str, arr) {
      
	let str_arr =[];
    let count = [];
    
    str_arr = str.split("");
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "_") {
          count.push(i);
        }
      }
    
    for (let j = 0; j < count.length; j++) {
       str_arr.splice(count[j], 1);
       str_arr.splice(count[j], 0, arr[j]);
     }
    
    let final = str_arr.join("");
    return(final);
    }
    
alert(wordInsert(str, arr));

//-------------------------------------------------------------------------------//

// 2)

let arr = [8, 0, 1, 'hey', 12, 5, true, '2', null, 7, 3];
    
function arrSort(arr) {
    let arr2 = [];
    let odd = [];
    let even = [];
    let final = [];
    
    for (let i  = 0; i < arr.length; i++) {
        let a = typeof(arr[i]);
        let b = arr[i];
        if (a === "number") {
          arr2.push(b);
        }
      }
    
    for (let j = 0; j < arr2.length; j++) {
        let c = arr2[j];
        if (c % 2 == 0) {
          even.push(c);
        } else {
          odd.push(c);
        }
      }
    
    Array.prototype.push.apply(odd, even);
    return(odd);
    }
    
alert(arrSort(arr));

//---------------------------------------------------------------------------------//

// 3)

let arr = [1, '10', 'hi', 2, 3];
    
function counter (arr) {
    let num_count = 0;
    let string_count = 0;
    
    for (let i = 0; i < arr.length; i ++) {
        let t = typeof(arr[i]);
        if (t === "number") {
          num_count += 1;
        } else if (t === "string") {
          string_count +=1;
        }
      }
    
    return(`"Numbers: ${num_count}, Strings: ${string_count}"`)   
    }
alert(counter(arr));

//---------------------------------------------------------------------------------------//

// 4)

let arr1 = [];
let arr2 = [];
    
function minMax(arr1, arr2) {
    let next;
    
    while (next != 0) {
        arr1.push(prompt("Enter the words"));
        next = confirm("Anything else?");
      }
    
    alert(`Your array is [${arr1}]`);
    
    for (let i = 0; i < arr1.length; i++) {
        let len = arr1[i].length;
        arr2.push(len);
      }
    
    let max = Math.max.apply(Math, arr2);
    let min = Math.min.apply(Math, arr2);
    return(`The SUM of MINIMUM and MAXIMUM character containing strings is ${min + max}`);
    }
    
alert(minMax(arr1, arr2));

//------------------------------------------------------------------------------------------//

// 5)

let arr = [];
    
function sum (arr) {
    let next;
    let count = 0;
    
    while (next != 0) {
        arr.push(+prompt("Enter a number to sum up", ""));
        next = confirm("Anything else?");
      }
    
    for (let i = 0; i < arr.length; i++) {
        count +=arr[i];
      }
    return(count);
    }
alert(sum(arr));

//-------------------------------------------------------------------------------------------//

// 6)

let arr1 = [];
    
function mult(arr1) {
    let result = [];
    let next;
    
    while (next != 0) {
        arr1.push(+prompt("Enter numbers for multiplication", ""));
        next = confirm("Anything else?");
      }
    
    
    for (let i = 0; i < arr1.length - 1; i++) {
        a = arr1[i];
        b = arr1[i + 1];
        c = a * b;
        result.push(c);
      }
    alert(`This is your array: [${arr1}]`);
    return(`This is the result array: [${result}]`); 
    }
alert(mult(arr1));