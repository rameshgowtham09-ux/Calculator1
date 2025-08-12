let firstNumber="";
let SecondNumber="";
let operator="";

function append(number){
    if(operator===""){
        firstNumber+=number;
        document.getElementById('res').value=firstNumber;
    }
    else{
        SecondNumber+=number;
        document.getElementById('res').value=SecondNumber;
         document.getElementById('res').value=firstNumber+operator+SecondNumber;
    }
}
function operate(op){
    operator=op;
     document.getElementById('res').value=firstNumber+operator;
}

function calculate(){
    let result;
    switch(operator){
        case'+':
        result=parseInt(firstNumber)+parseInt(SecondNumber);
        break;
        case'-':
        result=parseInt(firstNumber)-parseInt(SecondNumber);
        break;
        case'*':
        result=parseInt(firstNumber)*parseInt(SecondNumber);
        break;
        case'/':
        result=parseInt(firstNumber)/parseInt(SecondNumber);
        break;
    }
    document.getElementById('res').value=result;
}
function clearresult(){
    firstNumber="";
    SecondNumber="";
    operator="";
    document.getElementById('res').value="";
}