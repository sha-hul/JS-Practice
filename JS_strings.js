//strings are immutable in JS
let _name="shahul";
_name[0]='r'
console.log(_name);//O/p is shahul

//string proerty and Methods

let str="Hello bro this is Island best is it"

//length property
var len=str.length;
//console.log("Lengeth of len : "+len)
//Methods
upperStr= str.toUpperCase(); //return only upper case 
lowerStr= str.toLowerCase();//return only lower case 
checkStr= str.includes("o");//retrun true if string exist else false (Case Sensitive)
starStr= str.startsWith("Hello") //return true if string startswith val else false (Case Sensitive)
endStr= str.endsWith('it');//return true if string endswith val else false (Case Sensitive)
searchStr=str.search('is');//returns the index of the value if value not exist it returns (-1) last index.
//match() mainly used while checking the regex
matchStr=str.match(/is/); //returns o/p : is
matchStr=str.match(/is/g);//returns globally o/p : is,is,is 
matchStr=str.match(/is/gi);//returns o/p : is,is,is,is
trimStr= str.trim();//left and right space will neglect
trimstartStr= str.trimStart("is")//start while space neglect
trimendtStr= str.trimEnd("is")//start while space neglect
replaceStr=str.replace("is","this");//replace the string
replaceStr=str.replace(/is/g,"this");//replace the string case sensitive
replaceStr=str.replace(/is/gi,"this");//replace the string case insensitive 
sliceStr=str.slice(1,6)//slice a part of string
substringStr=str.substring(1,6)//same as slice 
splitStr= str.split(" ") //returns a split of value by ',' as an array
concatStr= str.concat(_name,_name)//to concat the value to the string (',' to concat more )
charAtStr=str.charAt(2)//returns the value of the index
charAtcodeStr= str.charCodeAt('A')//returns an ascii value  
fromCharCodeStr= String.fromCharCode(100)//returns the alphabet for the passed ascii value
indexOfStr=str.indexOf('Island');//to check the value from first
LastindexOfStr=str.lastIndexOf('this');// to check the value from last
num=5;
toStr=num.toString();//convert to string
console.log(toStr)