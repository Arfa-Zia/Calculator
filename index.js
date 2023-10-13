
let input = document.querySelector('input')
let buttons = document.querySelectorAll('button')
let string = ""  ;

Array.from(buttons).forEach( button=> {
    button.addEventListener ( 'click' , (e) => {
    if(e.target.innerText == 'Clear'){
        string=" ";  
        input.value = string;
    }
    else if( e.target.innerText == 'Del'){
        string = string.slice( 0 , -1);
        input.value = string;
    }
    else if( e.target.innerText == '.'){
        string+= ".";
        input.value = string;
    }
    else if( e.target.innerText == '='){
       return operation(string);
    }
    else{
        string = string + e.target.innerText
        input.value = string;
    }

    })
} ) 

function add(num1, num2){
 return  parseFloat(num1) + parseFloat(num2);
}
function subtract(num1, num2){
 return  parseFloat(num1) - parseFloat(num2);
}
function multiply(num1, num2){
    if(num1.isInteger && num2.isInteger ){
        return Number(num1 * num2);
    }
    else{
        return  (num1 * num2).toFixed(2);
    }
 
}
function divide(num1, num2){
    if( num2 == '0'){
        return 'Infinity'
    }
    else if(num1.isInteger && num2.isInteger ){
        return Number(num1/ num2);
    }
    else{
        return  (num1 / num2).toFixed(2);
    }
}
function operation(string) {
let operators = string.match(/[−+×÷]/g); // Extract all operators
let numbers = string.split(/[−+×÷]/).map(Number); // Extract all numbers
let result = numbers[0]; // Initialize the result with the first number

for (let i = 0; i < operators.length; i++) {
    let operator = operators[i];
    let nextNumber = numbers[i + 1];

    switch (operator) {
        case '+':
            result = add(result , nextNumber)
            break;
        case '−':
            result = subtract(result , nextNumber)
            break;
        case '×':
            result  = multiply(result, nextNumber)
            break;
        case '÷':
           result = divide(result , nextNumber)
            break;
    }
}

input.value = result;
}



