var number1;
var number2;
var operator;
var calno1 ="_";
var calno2 = "_";
var calop = "_";
var old1 ="";
var old2 ="";
var numbertoadd;
var operatortoadd;
var whatnumberset = 0;
var oldanswer;
var answer;
var blank = "⠀";
function one(){
    numbertoadd = 1;
    setnumber();
}
function two(){
    numbertoadd = 2;
    setnumber();
}
function three(){
    numbertoadd = 3;
    setnumber();
}
function four(){
    numbertoadd = 4;
    setnumber();
}
function five(){
    numbertoadd = 5;
    setnumber();
}
function six(){
    numbertoadd = 6;
    setnumber();
}
function seven(){
    numbertoadd = 7;
    setnumber();
}
function eight(){
    numbertoadd = 8;
    setnumber();
}
function nine(){
    numbertoadd = 9;
    setnumber();
}
function zero(){
    numbertoadd = 0;
    setnumber();
}
function dot(){
    numbertoadd = ".";
    setnumber();
}
function setnumber(){
    if(calop == "_"){
        number1 =String(old1)+String(numbertoadd);
        old1 = number1;
        whatnumberset = 1;
        document.getElementById("answer").innerHTML=number1;
    }
    if(calop != "_"){
        number2 = String(old2)+String(numbertoadd);
        old2 = number2;
        whatnumberset = 2;
        document.getElementById("answer").innerHTML=number1+operator+number2;
        console.log(number1);
        console.log(operator);
        console.log(number2);
    }
}
function plus(){
    if(whatnumberset >= 1){
    operatortoadd = "plus";
    console.log(operatortoadd);
    setoperator();
    }
}
function minus(){
    if(whatnumberset >= 1){
    operatortoadd = "minus";
    console.log(operatortoadd);
    setoperator();
    }
}
function multiply(){
    if(whatnumberset >= 1){
    operatortoadd = "multiply";
    console.log(operatortoadd);
    setoperator();
    }
}
function divide(){
    if(whatnumberset >= 1){
    operatortoadd = "divide";
    console.log(operatortoadd);
    setoperator();
    }
}
function setoperator(){
    if(operatortoadd == "plus"){
        if(whatnumberset >= 1){
            operator = "+";
        }
    }
    if(operatortoadd == "minus"){
        if(whatnumberset >= 1){
            operator = "-";
        }
    }
    if(operatortoadd == "multiply"){
        if(whatnumberset >= 1){
            operator = "x";
        }
    }
    if(operatortoadd == "divide"){
        if(whatnumberset >= 1){
            operator = "÷";
        }
    }
    calop = operator;
    document.getElementById("answer").innerHTML=number1+operator;
}
function equals(){
if(whatnumberset == 2){
    oldanswer =document.getElementById("answer").innerHTML;
if(operator == "+"){
    answer = Number(number1) + Number(number2);
}
if(operator == "-"){
    answer = number1 - number2;
}
if(operator == "x"){
    answer = number1 * number2;
}
if(operator == "÷"){
    answer = number1 / number2;
}
    document.getElementById("solution").innerHTML =String(oldanswer);
    document.getElementById("answer").innerHTML = answer;
    calop="_";
    setnumber1toanswer();
}
}
function cleartext(){
    number1 ="";
    number2 ="";
    operator ="";
    calno1 ="_";
    calno2 = "_";
    calop = "_";
    old1 ="";
    old2 ="";
    numbertoadd ="";
    operatortoadd ="";
    whatnumberset = 0;
    oldanswer ="";
    oldoldanswer ="";
    answer ="";
    document.getElementById("solution").innerHTML = blank;
    document.getElementById("answer").innerHTML = blank;
    console.log("clearworks");
}
function setnumber1toanswer(){
    if(whatnumberset >= 2){
        number1 =  answer;
        old1=number1;
        old2="";
        whatnumberset =1;
    }
}