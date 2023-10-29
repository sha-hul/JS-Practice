//-----------------for loop task-----------------

// var temp=0;
// for(let i=1;i<=10;i++){
//     temp=temp+i;
//     console.log(temp+"\n")
// }

//-----------------truly value and falsy value-----------------

// "",undefined,null,0,false,NaN
// if(""){
//     console.log("Hello dude")
// }

//-----------------Phone Number-----------------

// function createPhoneNumber(arr){
//     // You only need to implement this function.
//     arr.forEach(phoneNum);
//     return phoneNum;
//   }
//   function phoneNum(value){
//     let temp="";
//     temp.concat(value);
//     return temp;
//   }
//   console.log(createPhoneNumber())

//-----------------Prime Number in JS-----------------

// function checkForPrime(n) {
//     debugger
//     // You only need to implement this function.
//     if(n==0 || n==1){
//       return false;
//     }
//     else if(n>1){
//       for(let i=2;i<n;i++){
//         if(n%i==0){
//           return false;
//         }
//       }
//       return true
//     }
//   }

//-----------------hoisting---------
// console.log(a)
// var a='shahul'

// console.log(arr)
// var arr=[1,2,3,4]

// console.log(obj)
// var obj={name:'shahul',age:'24'}

//-------------Create 2D Matrix-----------

// function createMatrixII(size) {
//     // You only need to implement this function.
//     debugger
//     let arr = [];
//     let temp=0;
//     for (let i = 0; i < size; i++) {
//       arr.push([]);
//       for(let j=0;j<arr.length;j++){
//         arr[i].push(temp)
//         temp++;
//       }  
//     }
//    console.log(arr) ;
//   }

//----------

// function deleteProperty() {
//     debugger
//     let obj= { firstName: "Sachin", middleName: "Ramesh", lastName: "Tendulkar" };
//     propName= "middleName";
//     // You only need to implement this function.
//     delete obj.propName;
//     return obj; 
//   }


//--------- arrays of object------
// var student = [

//     {
//         name: "Kevin",
//         std_id: 10,
//         marks: 25
//     },
//     {
//        name: "Austin",
//        std_id: 20,
//        marks: 30
//     },
//     {
//         name: "Robin",
//         std_id: 30,
//         marks: 20
//     }
  
//   ]
// const studentFind=()=>{
//     debugger
//     let i=0;
//     let temp=0;
//     let tempi=0;
//     for(let i=0;i<student.length;i++){
//         if(student[i].marks>temp){
//             temp=student[i].marks;
//             tempi=i;
//         }
//     }
//     console.log(student[tempi].name);
//   }
  
 //arrow function

//  const checkEven=(a,b)=> a%2===0 && b%2===0;
//  console.log(checkEven(1,2));
//  console.log(checkEven(2,Math.ceil(1.4)));

//Scope 

//It defines the accessibility of variable

//global scope

// var Id= 23; //I can use any where in this file

// //function scope
// function nameEUUK() {
//     const countryIDEUUK=[1,2,3,8,23]
//     var countryIdEUUK=[1,2,3,8,23]
//     console.log(countryIDEUUK)
//     console.log(Id)
//  //block scope   
//     if(-Infinity){
//         const countryName={'23':'Swedan'}
//         var counName={'23':'Swedan'}
//     }
//     console.log(counName) //do not use var in case of block scope
// }
// nameEUUK();
//function scope
//console.log(countryIDEUUK);//error it is not defined
//console.log(countryIdEUUK)//error it is not defined
//block scope 
//console.log(counName) //error bcoz we can't use any function variable out
//console.log(countryName) // error  it is not defined

//Lexical scope

// if ('go') {
//     const outer=10;
//     if ('go inner') {
//         const inner =20;
//         console.log(outer);
//         console.log(inner);
//     }
// }

//Hoisting

//The variable and func declarations are moved to the top of scope before code execution.

//var a; //declaration comes to the top

// console.log(a) //undefined

// var a=20;

// add(a,30,40,10) //output: 100 (while func declaration entirely hoisted.)
//...params - rest operator is used to accept the 'n' no of argument as an array. 

// function add(a,...params) {
//     Number(a)
//     let temp=0;
//     params.forEach(value=>{
//         temp+=value;
//     })
//     console.log(a+temp)
// }

// console.log(abc+" "+haha); // undefined hoisting is unapplicable in func exp and arrow func
// abc() //error bcoz we can't call the variable

// var abc= function () {
//     console.log('hello')
// }

// var haha=()=>console.log('hey man!!!')
// haha()
// abc()

//-----Call back function------

//It is function passed as an argument to the another function.

const carRepair=(a,functoExecute)=>{
    console.log('Working on car repair');
    //if work is done call the owner
    functoExecute(a)
}

const callOwner=(a)=>{
    if (a==true) {
        console.log('Work Done, calling the owner')
    } else {
        console.log('Work is not done, call the owner tommorrow')
    }
}

//callback function
carRepair(false,callOwner);

//-----closure---

//Here's a brief example:

function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

// Create a closure by calling outerFunction and assigning the result to a variable
let closureExample = outerFunction();

// Invoke the inner function, which still has access to outerVariable
closureExample(); // Outputs: "I am from outer function"


//In the above example, innerFunction is defined inside outerFunction, and it has access to the
//  outerVariable of its containing scope.When we call outerFunction, it returns innerFunction,
//  creating a closure.Even though outerFunction has finished executing, the inner function still
//  "remembers" and has access to the outerVariable.



//-----Foreach----------


// function search(arr, key) {
//   debugger
//   let temp=false;
//   // You only need to implement this function.
//   const searchCheck=arr.forEach((val)=>{
//     if(val==key){
//        temp=true;
//     }
//   })
//   return temp;
// }

// console.log(search([1,2,3,4],2))

//--sort()--------


function sort(arr) {
  // You only need to implement this function.
  arr.sort() // ['abc', 'banana', 'pqr']
  return arr; //['abc', 'banana', 'pqr']
}

var arr = ['abc', 'pqr', 'banana'];
if (console.log(sort(arr)) && console.log(arr) != ['abc', 'banana', 'pqr'])
  console.log("Test fails: Expected ['abc', 'banana', 'pqr'] for input arr = ['abc', 'pqr', 'banana'] ");
else
  console.log("Sample test case for input arr = ['abc', 'pqr', 'banana'] passed!");


// -- closure--
console.log('-- closure--')
function out(params) {
  const b=params;
  function inner(n) {
    var a= n;
    console.log(b)
    console.log(a)
  }
  return inner;
}

let createClosure= out('Hey I am out func variable')
createClosure('Hey I am inner func variable')

//output
// Hey I am out func variable
// Hey I am inner func variable

//---for of loop---

//for array, sets, maps to iterate


let ForArr=[1,2,3,4,5]

for (const iterator of ForArr) {
  console.log(iterator)
}

//for in loop

//to loop throught the objs
let objFOR={
  empname:'shahul',
  age:24,
  project:{
    pname:'cvm',
    apname:'fbs'
  }
}

for (const key in objFOR) {
  console.log(objFOR[key])
  // for (const keys in objFOR[key]) {
  //   console.log(objFOR[key][keys])
    
  // }
}


//----------challenge 1 Interview quesion-------------


function getTopStudents() {
  debugger;
 let students=[
    { name: "Alice", grade: 85 },
    { name: "Emily", grade: 95 },
    { name: "Charlie", grade: 78 },
  ]
  let N=2;
  // Invoke the closure to add all the students
  students.sort((a,b)=>b.grade-a.grade);
  let arr=[];
  function addAllStudents() {
    for(let i=0;i<N;i++){
      arr.push('name :'+students[i].name)
    }
    return arr;
  }
  let result= addAllStudents();
console.log(result) ;
}

//-----------chanllenge 2 interview question---


function filterStudents() {
  debugger;
  let students=[
    { name: 'Alice', age: 18, grade: 85 },
    { name: 'Bob', age: 19, grade: 92 },
    { name: 'Charlie', age: 17, grade: 78 },
  ]
  let passingGrade=90;
  let filterArr=students.filter((val)=>{
    if(val.grade>=passingGrade){
     return val;
    }
  })
  let arr=[];
 for (let index = 0; index < filterArr.length; index++) {
  arr.push(filterArr[index].name);
 }
console.log(arr);
}