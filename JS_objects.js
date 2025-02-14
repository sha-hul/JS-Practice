// //create an empty object -- Name:Value (pair)

// let empDetails={};

//  //--------------CRUD Operation in Objects----------------

//  //creating property

// empDetails.name='Shahul.Z';
// empDetails.DOB='24/09/1999';
// empDetails.phoneNum=7826927252
// empDetails.apps={}
// empDetails.apps.appName1= 'CVM'
// empDetails.apps.appName2= 'AAI'
// empDetails.apps.appName3= 'FBS'
// empDetails.apps.appName4= 'MC'

// //Reading the Object

//  console.log(empDetails.name)

// //updating the objects
// console.log('----------Before Deleting DOB property------------')
// empDetails.DOB='24/10/1999'
// console.log(empDetails)
// //Deleting the objects
// //Type1
// console.log('----------After Deleting DOB property Type 1------------')
// delete empDetails.DOB
// console.log(empDetails)
// //Type2
// delete empDetails['phoneNum']
// console.log(empDetails)

// //Reference Type Example 
// console.log('--------------------Reference Type Example-------------------')
// let sameDetails= empDetails;
// sameDetails.DOB='12/12/1994';
// console.log(sameDetails)
// console.log(empDetails)

// //Primitive type Example

// console.log('--------------------Primitive Type Example-------------------')
// let a=12;
// b=a;
// a=14;

// console.log('a : '+a+'\n'+'b : '+b)

// //Number property Name

// let DummyObj={1:'hi',2:'hello'}

// console.log(DummyObj['1'])

// //challenge 

// console.log('---------------------------Nested Objects--------------------------')

// const userDetails = {
//     name: {
//       first: "Yash",
//       last: "Gulati",
//     },
//     jobTitle: "JS Instructor @ Crio.do",
//     email: {
//       work: "y@y.com",
//       personal: "",
//     },
//     status: {
//       isOnline: true,
//       isVerified: false,
//     }
//   }

// //1) Update the first and last properties with your details.

// userDetails.name['first']='Shahul'
// userDetails.name['last']='Z'

// //2) Add new property isProMember to the status and set it to false.

// userDetails.status.isProMember = false;

// console.log(userDetails)

// console.log('----------------------Object Destructructing-------------')

// //unpack the properties of the object into the distinct variable 


const userDet = {
      first: "Yash",
      last: "Gulati",
      age:19,
      'phoneno':7826927252,
      'address':{
        'city':'Tirupur',
        'street' : 'karuparayan street',
        'pincode':'641665'
      }
  }

//   //to print the 3 property normal

//   const firstName=userDet.first;
//   const lastName=userDet.last;
//   const _age=userDet.age;

//   console.log(firstName + "  "+lastName+ "  "+_age)
//   //By Destructor

//   //variable name should be same
//   var {first, last, age} =userDet; //using in node js and react js

//   console.log(first + "  "+last+ "  "+age)

//   //to change the variable name

  const {first:fName, last:lName, age:Age} =userDet;

  console.log(fName + "  "+lName+ "  "+Age)

//   //to get the nested objects
// console.log('------------nested objects-------------')
//   var {first, last, age,phoneno,address}=userDet;
//   var {city,street,pincode}=address;
//   console.log(first+" "+ last+" "+ age+" "+phoneno+" ")
//   console.log(city+ " "+ street+ " "+ pincode)


//Object Properties

let dummyCar={color:'blue',type:'tata',capacity:'30L',capacity1:'20L'}
console.log(Object.keys(dummyCar))
console.log(Object.values(dummyCar))
console.log(Object.entries(dummyCar))
console.log(userDet.hasOwnProperty('first'));


for (const item in dummyCar) {
  console.log(`${item}`);
}