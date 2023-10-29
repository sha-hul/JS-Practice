
// let elements=[1,4,2,3,4]
// console.log(elements)

// let arr=[11,1101,10000,4,13]
// console.log(arr.sort()) 
// // O/P :[ 10000, 11, 1101, 13, 4 ]
// // (bcoz : it alway consider elements as string)

// //array to string

// let arr2=["Shahul",10032,311,90]
// console.log(arr.join()) // output : 10000,11,1101,13,4
// console.log(arr2.join('-')) // output : Shahul-10032-311-90


// //string to array

// let str="This was written by Sheport"
// console.log(str.split(' ')) // output : [ 'This', 'was', 'written', 'by', 'Sheport' ]'

// arr.reverse() //to reverse the array

// //Multi Dimensional Array

// let _2d= [1,2,3,[4,5]]
// console.log(_2d[3][1]) // output : 5

// let _3d= [1,2,3,[4,5,[6,7]]] 
// console.log(_3d[3][2][1])// output : 7

// let _4d= [1,2,3,[4,5,[6,7,[8,9]]]]
// console.log(_4d[3][2][2][1]) // output : 9

// console.log(_2d[3].length)

// //print 3d array

// let array= [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9,10,'Shahul'],
// ]

// for (let index = 0; index < array.length; index++) {
//     for (let j = 0; j < array[index].length; j++) {
//         console.log(array[index][j]);
//     }
// }
// console.log('------Task-------')
// let arr3=[4,5,[1,2]]

// arr3[2].push(3);
// console.log(arr3)
// arr3[2].push([]);
// console.log(arr3)
// arr3[2].pop()
// console.log(arr3)

// for (let i=0; i<arr3.length;i++){
//     for (let j = 0; j < arr3[i].length; j++) {
//         console.log(arr3[i][j]);
//         continue
//     }
//     console.log(arr3[i])
// }

// let arrayCheck=[1,2,3,4,5];
// console.log(arrayCheck.includes(2,1));

// console.log('----------------------Object Destructructing-------------')

// let desArr=['Shahul',true,null,[undefined,24]]

// const [a,b,c,[,e]]=desArr; //empty space for to occupy the position.

// console.log(a+b+c+e) // output : Shahultruenull24

console.log("---------------------Arrays of Object----------------")

//challenge - 1
let car=[
    {color:'blue',type:'tata',capacity:'30L'},
    {color:'black',type:'scoda',capacity:'20L'},
    {color:'while',type:'tesla',capacity:'15L'}
]

console.log(car[0])

//challenge -2 //to find the person of maximum marks

var student = [

    {
        name: "Kevin",
        std_id: 10,
        marks: 25
    },
    {
       name: "Austin",
       std_id: 20,
       marks: 30
    },
    {
        name: "Robin",
        std_id: 30,
        marks: 20
    }
  
  ]
 const studentFind=()=>{
    let i=0;
    let temp=0;
    let tempi=0;
    for(let i=0;i<student.length;i++){
        if(student[i].marks>temp){
            temp=student[i];
            tempi=i;
        }
    }
    return student[tempi].name;
  }
  console.log(studentFind())


  //console.log('----------array.sort()===========')
//---sort for numbers----
// let numbers = [5, 2, 8, 1, 4];

// numbers.sort(function(a, b) {
//   console.log(a+"-"+b+":"+(a-b) ); 
// });
// numbers.sort((a,b)=>a-b) // ascending order
// console.log(numbers); // Outputs: [1, 2, 4, 5, 8]
// numbers.sort((a,b)=>b-a) //descending order
// console.log(numbers); // Outputs: [ 8, 5, 4, 2, 1 ]

// let num=[1102,213,11,1094,1999,9]
// num.sort((a,b)=>Number(a)-Number(b));

// console.log(num)

//---sort for words----
// let words = ['Shahul', 'Anom','anom', 'Head', 'Maxwell', 'Ravindra'];

// words.sort();// ascending order
// console.log(words)
// words.sort((a,b)=> b.localeCompare(a)) //descending order
// console.log(words)

//----Sort the objects Challenge-----

// const arraySortMe = [
//   {
//     name: "Kevi",
//     age: 25,
//   },
//   {
//     name: "Arnold",
//     age: 6,
//   },
//   {
//     name: "Sheila",
//     age: 56,
//   },
// ];

// arraySortMe.sort((a,b)=>a.age-b.age)
// arraySortMe.forEach((val)=>console.log(val.name))

//---Map function challenge---
console.log('--------Map function----------')
//area of circle

let radiusArr=[1,2,3,4]

let areaCircle=radiusArr.map(val=>Math.round(Math.PI*Math.pow(val,2)))

console.log(areaCircle)

//----Filter---
console.log('---filter----')
const filterArr=areaCircle.filter((val)=>val>10);
console.log(filterArr)

//---Reduce---

console.log('---Reduce---')

let reduceArr= ['One','two','three']

const reduceRes= reduceArr.reduce((temp,val)=>temp+=val.length,0)
//temp=0
//temp=3
//temp=6
//temp=11
console.log(reduceRes)

const joinStr=reduceArr.reduce((temp,val)=>temp+=val,'')
//temp=''
//temp='One'
//temp='OneTwo'
//temp='OneTwoThree'

console.log(joinStr)

//---Splice()---

//delete a set of element in the array

let spliceArr=[12,23,34,45,56,67,78,89,90]
//delete
spliceArr.splice(3,2) //arg1 : index, arg2 : len to delete
console.log(spliceArr)//[
//   12, 23, 34, 67,
//   78, 89, 90
// ]
//create
spliceArr.splice(3,0,'Hi','I am inserted')//arg1 : index, arg2 : len to delete, arg3 to n to add the array
console.log(spliceArr)//[ 12, 23, 34, 'Hi', 'I am inserted', 67, 78, 89, 90 ]
//update
let Arrsplice=spliceArr.splice(3,2,'updateindex3',{empName:'Index4 new update'})//
console.log(spliceArr) // [
//   12,
//   23,
//   34,
//   'updateindex3',
//   { empName: 'Index4 new update' },
//   67,
//   78,
//   89,
//   90
// ]
//read
console.log(Arrsplice)//[ 'Hi', 'I am inserted' ]

//---arr.slice()---

let sliceArr= [1,2,3,4,5]

const sliceRes= sliceArr.slice(1,4) //arg2 index-1

console.log(sliceRes)// op : [ 2, 3, 4 ]