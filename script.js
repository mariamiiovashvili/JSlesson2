// 1. შექმენით ფუნქცია, რომელსაც გადავცემთ n რაოდენობის მნიშვნელობას და დააბრუნოს 
// მხოლოდ დადებითი რიცხვების ჯამს:
2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8;

function positive (...args){
    let pos = 0 ;

    for(let items of args)
    if (items > 0) {
        pos += items
    }
    return pos;

}


let result = positive(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8)
console.log (result);








//2. ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი:
10, 50, 6, 7, 8, 11, 6, 3, 9

function sum (...args){

let numbersSum = 0 

for (let item of args){
 numbersSum += item

}
    console.log(numbersSum)
}

sum (10, 50, 6, 7, 8, 11, 6, 3, 9)





// 3. შექმენით ფუნქცია სახელად printname რომელსაც პარამეტრად გადაეცემა ობიექტი. ობიექტს ექნება 
// შემდეგი ფორმა:

function printname (){

let user = {
  firstname: 'giorgi',
  lastname: 'saakadze',
  age: 32,
  isloggedin: 'true'
}


if (user.isloggedin === 'true'){
    return 'giorgi saakadze' ;  
}
 else {
        return 'false';
    }
}

let x = printname ();
    console.log(x)



// ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 'giorgi saakadze') 
// თუ isloggedin არის true და false თუ isloggedin ფროფერთი არის false;

// 4. შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს რიცხვების მასივი 
// და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

// function maxNum () {
//     let numbers = [-5,4,87,-900,33,2,-65]; 
//       for( x of numbers )  {
//           if ( x = Math.max ) {
//               return x;
//           }
//       }  
    
// }
// let i = maxNum (); {
//     console.log(Math.max(-5,4,87,-900,33,2,-65));
// }
