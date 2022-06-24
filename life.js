let acceptOperation = prompt('please input the operation you will like to perform from these: +,-,*, or / ')
    


var number1 = parseFloat(prompt('input your first number'));
var number2 = parseFloat(prompt('input your second number'));

if (acceptOperation == '+') {
  
    result =(number1 + number2);
    alert(result);
}

else if(acceptOperation == '-'){
    result = number1 - number2;
    alert(result);
}

else if(acceptOperation == '*'){
    result = (number1 * number2);
    alert(result);
}
else if(acceptOperation == '/'){
    result= (number1 / number2)
    alert(result)
}
else{
    alert('invalid')
}
    

