'use strict'

const age = 23;
let result = null;

if (age >= 20) {
    result = '成年';
} else {
    result = '未成年';
};
document.write(result);


const  Age = 65;
const member = true;

if (Age >= 60 && member) {
    console.log('senior and membaer')
} else if (Age < 60 && member) {
    console.log('not senior but member')
} else if (Age < 60 && !member) {
    console.log('not senior and not member')
};

const AGE = 16;
const Member = true;

if (AGE <= 15 && Member) {
    console.log('¥800')
} else if (Member) {
    console.log('¥1,000') 
}　else {
    console.log('¥1,800')
};

// for (var i = 1;i <= 5;i++) {
//     console.log(i);
//     document.write(i);
// };

//Fiz Buzz

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    };
};