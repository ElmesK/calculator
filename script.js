var firstNum = 0;
var secondNum = 0;
var currentEntry = 0;
var answer = 0;
var process = 0;
var operatorClicked = false;


function AddDigit(num) { 

         currentEntry = num; //set the current entry to the number passed to the function from the button

         if (operatorClicked  = true){ // if the operator (+, -, /, *) is clicked set the second number, i.e click first number store it, click operator, reset current entry, click second number and store that.

              SetSecondNumber(currentEntry);

           }else{

                 SetFirstNumber(currentEntry);
                
                }

}
        

function SetFirstNumber(currentEntry){


//set the current entry to the first number and display it in the textfield and on a label

         console.log('first number is ' + currentEntry);
         document.getElementById('Display').value = currentEntry;
         firstNum = currentEntry;
         document.getElementById('calculation').innerHTML = firstNum;
          
}




function SetSecondNumber(currentEntry){

//set the current entry to the second number and display it in the textfield and on a label

         document.getElementById('Display').value = currentEntry;
         console.log('second number is ' + currentEntry);
         secondNum = currentEntry;
         document.getElementById('calculation').innerHTML = secondNum;
        
}



function Operation(process){

      operatorClicked  == true;
      console.log('operator clicked');



currentEntry = 0; 
console.log('current entry reset');


document.getElementById('Display').value += process;

if (process == '+'){

document.getElementById('calculation').innerHTML += process;
 answer = firstNum + secondNum;

return answer;

}else if(process == '-'){

document.getElementById('calculation').innerHTML += process;
answer = firstNum - secondNum;

return answer;

}else if(process == '*'){

document.getElementById('calculation').innerHTML += process;
answer = firstNum * secondNum;

return answer;

}else if(process == '/'){

document.getElementById('calculation').innerHTML += process;
answer = firstNum / secondNum;

///return answer;
}


}







function Total(answer){

document.getElementById('Display').value = answer;
document.getElementById('calculation').innerHTML = answer;

}








function Clear(){

document.getElementById('Display').value = '';
document.getElementById('calculation').innerHTML = '';
firstNum.value = 0;
secondNum.value = 0;
answer.value = 0;
operatorClicked = false;

}
