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

 const checkEven=(a,b)=> a%2===0 && b%2===0;
 console.log(checkEven(1,2));
 console.log(checkEven(2,Math.ceil(1.4)));