
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