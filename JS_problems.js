//----------Reverse 0 to 99999. find the palindrome---------

function ReverseNum() {
    debugger;
    a= 11;
    b=999;
    for(let i=a;i<=b;i++){//32
       let conStr=i.toString();
       let conArr= conStr.split('')
       let reverse= conArr.reverse();
       let joinRevStr= reverse.join('');
       if(joinRevStr==i ){
        //    console.log(i)
       }
    }
}

// ReverseNum()

//----------Prime NUmber--------------

function primeNumber() {
    debugger;
    let num=25;
    if(num==0 && num==1){
        console.log('Not a prime number')
    }
    else{
        for (let  i= 2;  i<num ; i++) {
            if(num%i == 0){
                return 'Prime number'
            }
        }
        return 'Not a prime number'
    }
}

//---------Fibonnaci Series------------

function FibonnaciSeries() {
    debugger;
    let num= 6;
    let a= 0;
    let b=1;
    for (let i= 0; i<num ; i++) {
        console.log(a)
        let res= a+b;
        a=b;
        b= res;
    }
}

//---------Leap Year------------

//condition first :  year%4==0 &&(year%100!=0 || year%400==0)

function CheckLeapYear() {
    let year = 3200;
    if (  year%4==0 && ((year%100!=0 || year%400==0))) {
        console.log(year + ' is leap year')
    }
    else{
        console.log('Not a leap year')
    }
}


//------Factorail------------

//expectation : 5! = 1*2*3*4*5 = ans


function factorailNum() {

    let num=9;
    if(num<0){
        console.log('Foctorial is invalid num should be positive')
    } 
    else if (num==0) {
        console.log('Fortorial of 0! is 1')
    }
    else {
        let temp=1;
        for(let i=1;i<=num;i++){
            temp*=i;
        }
        console.log(temp)
    }
  
}

//------Fizz Buzz-----------

// Write a function that prints the numbers from 1 to 100 - 
// a. For multiples of ‘3’, print “Fizz”, instead of the number
// b. For multiples of ‘5’, print “Buzz” instead of the number
// c. For multiples of ‘5’ and ‘3’, print “FizzBuzz” instead of the number

function fizzbizz() {
    debugger
    let num= 4153;
    if ((num%3 == 0) && (num%5==0)  ) {
        console.log('Fizz Bizz')
    }
    else if(num%3==0){
        console.log('Fizz')
    }
    else if(num%5==0){
        console.log('Bizz')
    }
    else{
        console.log(num)
    }
}

//-----Function celcius to fahrenheit , fahrenheit to celcius------

//(°C × 9/5) + 32
//(°F − 32) × 5/9 


function C2F(celcius) {
    return (celcius * (9/5)) + 32;
}
function F2C(fahrenheit) {
    return (fahrenheit - 32) * (5/9) ;
}

function DegreeConvertCal(deg,func) {
    return func(deg)
}

console.log(DegreeConvertCal(117, F2C))


//-------Simple Interest and Compound Interest--------

// S.I. = (Principal x Rate x Time) / 100
// C. I = Principal(1+Rate)^time - Principal

function SI(Principal,Rate,Time) {
   return (Principal * Rate * Time) / 100;
}
function CI(Principal,Rate,Time){
   return (Principal*Math.pow((1+Rate),Time) - Principal) 
}

function InterestCallback(Principal,Rate,Time,func) {
    return func(Principal,Rate,Time)
}


console.log(InterestCallback(236000,1.45,1,SI))

console.log(InterestCallback(236000,1.45,1,CI))

