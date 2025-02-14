function statement() {
    try {
        const val=0;
         val=1;
        switch (true) {
            case val==0:
                console.log("Hello");
                break;
            default: console.log("Bye");
                break;
        }    
    } catch (error) {
        console.error("Error : "+error.message);
    }
}
statement()

// Spread Operator

// syntax : ...obj, ...arr

// - To unpack the elements of the array and object into the new array and object.(New memory location created with same value)
// - this operator is used to avoid the reference.
//It is mostly used in 3 place
// a) Copying the array
// b) Merging the array
// c) passing the arguments
let arr1 = [1,2,3,4]
let arr2 = arr1;
arr2.push(5)
console.log(arr1); //reference issue

//finish it while revision a, b, c

//Rest Operator

//It is used in th function parameter to "collect remaining argument in an array".

//Object destructing

const objEmployee = {
    empName : "Irfan",
    empDate : "5/12/2025"
  }

const {empName, empDate} = objEmployee;

console.log(empName);
console.log(empDate);

