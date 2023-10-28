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
//block scoe 
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

// console.log(a) //undefined

// var a=20;

// add(a,30,40,10) //output: 100 (while func declaration entirely hoisted.)

// function add(a,...params) {
//     Number(a)
//     let temp=0;
//     params.forEach(value=>{
//         temp+=value;
//     })
//     console.log(a+temp)
// }

// console.log(abc+" "+haha);
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

console.log('----------array.sort()===========')
let numbers = [5, 2, 8, 1, 4];

numbers.sort(function(a, b) {
  console.log(a+"-"+b+":"+(a-b) ); 
});
numbers.sort((a,b)=>a-b) // ascending order
console.log(numbers); // Outputs: [1, 2, 4, 5, 8]
numbers.sort((a,b)=>b-a) //descending order
console.log(numbers); // Outputs: [ 8, 5, 4, 2, 1 ]
let words = ['Shahul', 'Anom','anom', 'Head', 'Maxwell', 'Ravindra'];

words.sort();// ascending order
console.log(words)
words.sort((a,b)=> b.localeCompare(a)) //descending order
console.log(words)
