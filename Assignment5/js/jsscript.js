// 'use strict';

// let a = false;

// const pass = true;


// if (pass) a = true;
// if (a) console.log('I can Drive')

// function logger() {
//     console.log('my first function')
// }

// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges`;

//     return juice;
// }

// const applejuice = fruitProcessor(55, 66);
// console.log(applejuice);

// // function declaration
// function calcAge1(birthyear) {
//     return 2021 - birthyear;
// }
// const age1 = calcAge1(1998);


// // function expression
// const calcAge2 = function (birthyear) {
//     return 2021 - birthyear;
// }
// const age2 = calcAge2(1996);

// console.log("this is an output ", age1, age2);

// // arrow function
// const calcAge3 = birthyear => 2021 - birthyear;
// const age3 = calcAge3(1993);
// console.log("this is arrow function" , age3);


function pices(slices){
    return slices*4
}

function fruitProcessor(apples, oranges) {
    
    const slapple = pices (apples);
    const slorange = pices (oranges);

    console.log(slapple,slorange);

    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;

    return juice;
}


fruitProcessor(45,99);
fruitProcessor(6,8);