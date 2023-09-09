console.log("run");

function clickme(){
   const number_1 = document.getElementById("number-1").value
   const number_2 = document.getElementById("number-2").value
    console.log(number_1+ " _ "+number_2)

    if(number_1 === number_2){
        console.log("Success..!");

    }else{
        console.log("Faill..!");
    }
}
function greterthan(){
    const number_1 = (document.getElementById("number-01").value)
    const number_2 = (document.getElementById("number-02").value)
     console.log(number_1+ " _ "+number_2)
 
     //console.log(number_1 +" _ "+number_2);
     if(number_1 == number_2){
         console.log("Number - 02");
 
     }else{
         console.log("Number - 01");
     }
 }

 function addition(){

    const number = (document.getElementById("addition-number").value)
     let sum = 0;
     for(let i=0;i<number.length;i++){
        sum+=parseInt(number[i])
     }
     console.log(sum);
 }
 function result() {
     
    const mark = parseInt( document.getElementById("mark").value);
    var result = "";

    if(mark>=75){
        result = "A";
    }else if(mark>=65){
        result = "B";
    }else if(mark>=45){
        result = "A";
    }else if(mark>=35){
        result = "S";
    }else{
        result = "Fail";
    }

    console.log("Student result is " + result);

}
function Get() {
     
    const mark1 = parseInt( document.getElementById("mark1").value);
    const mark2 = parseInt( document.getElementById("mark2").value);co
    

    if(mark1>=50 && mark2>= 50){
         console.log("A");
    }else if(mark1>=50 || mark2>=50){
         console.log("B");
    }else{
         console.log("C");
    }


}
function myName(name,name1,name2){
    console.log("My name is",name);
    console.log("My name is",name1);
    console.log("My name is",name2);


}
//arrow function
//const myName=() =>{
//   console.log("My name is thushan";)
//}
myName("thushan","AFSD","ACPT");
//myName("AFSD");
//myName("ACPT");

function NumberEqual (num1,num2){
    const total = num1+num2
    console.log(total);
}
NumberEqual(23,45);
NumberEqual(1423,6845);

NumberEqual(323,845);
function print2() {
    let printname=document.getElementById("printname").value;
    for(let i=0;i<printname.length;i++){

        console.log(printname[i]);

    }
    
}
//Do while

var array20 = [];
do{
    console.log(i);
    i++;
}while (i<10);

console.log('=============================');
for (let w = 0; w < array20.length; w++) {
    console.log(w);
if (w==5) {
        break;
    
}    
}
// function array1(){
//     const array2 = document.getElementById("array-2").value;
    
 
//     array2 = ['Banana','Orrange','Apple','Mango'];
 
//     array2.push(array2);
 
    
 
 
 
//   }
//   function ar2(){
//     const array2 = document.getElementById("array-2").value;
    
//     console.log(array2);
//   }
let a = [];
 function array1(){
   const array2 = document.getElementById("array2").value;

   a.push(array2);
 }

 function ar2(){
   console.log(a);
 }
//onclick
function clickme(){

    
    const text = document.getElementById('text-input');
    document.getElementById('name-display').innerHTML
}

// function onMouseOver()

function clickLogin(){
    const uName ="adMIn";
    const uPass ="12345";
    const userName = document.getElementById("user").value
    const password = document.getElementById("pass").value

    if (uName.toLowerCase() == userName.toLowerCase() && uPass == password) {
        alert('Login Success...!')
    } else {
        alert('Login Failed...!')
  
    }
}

function userText(){
    const user = document.getElementById("user-text").value

    let text = ''
    for (let i=0; i < user.length; i++) {
        text += user.chartAt(i)+" ";
        
    }
    document.getElementById('char-display').innerHTML = text
}
// load random numbers
var randAr = [];
for (var i=0; i<50; i++) {
    randAr.push(Math.round(Math.random() * 100))
}
document.getElementById('1').innerHTML = randAr;

function RandSubmit(){
    const num = parseInt(document.getElementById('RandomNumber').value);

    let result = [];
    for (var i=0; i<randAr.length; i++) {
        if(randAr[i] % num == 0){
            result.push(randAr[i])
        }
    }

    document.getElementById('2').innerHTML = result;
}