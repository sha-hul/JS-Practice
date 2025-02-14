console.log('-------------trunc()---------------')

console.log(Math.trunc(0.314));// 0
console.log(Math.trunc(2.50));// 2
console.log(Math.trunc(-1.23));// -1
console.log(Math.trunc(-22.99));// -22
console.log(Math.trunc(4.01));// 4

console.log('-------------round()---------------')

console.log(Math.round(0.314));//0
console.log(Math.round(2.50));//3
console.log(Math.round(-1.23));//-1
console.log(Math.round(-22.99));//-22
console.log(Math.round(4.01));//4

console.log('-------------floor()---------------')

console.log(Math.floor(0.314));//0
console.log(Math.floor(2.50));//2
console.log(Math.floor(-1.23));//-2
console.log(Math.floor(-22.99));//-23
console.log(Math.floor(4.01));//4

console.log('-------------ceil()---------------')

console.log(Math.ceil(0.314));//1
console.log(Math.ceil(2.50));//3
console.log(Math.ceil(-1.23));//-1
console.log(Math.ceil(-22.99));//-22
console.log(Math.ceil(4.01));//5

console.log('-------------abs()---------------')

console.log(Math.abs(0.314));//0.314
console.log(Math.abs(2.50));//2.50
console.log(Math.abs(-1.23));//1.23
console.log(Math.abs(-22.99));//22.99
console.log(Math.abs(4.01));//4.01

console.log('-------------pow()---------------')

//property and power()
console.log(Math.round(Math.pow(Math.PI,2)));//10
console.log(Math.round(Math.pow(Math.E,2)));//7
console.log(Math.pow(-7,2));//49
console.log(Math.pow(-0.99,3));//-0.970299

console.log('-----------min()max()-------------')
//min and max

let arrMinMax=[41,31,19,1.43]
console.log(Math.min(1,31,0,-0.11));//-0.11
console.log(Math.min(-0,0,-1,+1,-Infinity,+Infinity))//-infinity
console.log(Math.min(...arrMinMax))//1.43
console.log(Math.max(1,31,0,-0.11));//31
console.log(Math.max(-0,0,-1,+1,-Infinity,+Infinity))//Infinity
console.log(Math.max(...arrMinMax))//41