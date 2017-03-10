var Memeory = "0"; //previous digit selected
var Current = "0"; //current digit selected
var Operation = 0; 
const MaxLength = 10; //max length of digits enter is 10


function AddDigit(dig)
{if (Current.length > MaxLength)
       { Current = "For something that big you need a better calculator dude!";
       } else
       { if ((eval(Current) == 0)
              && (Current.indexOf(".") == -1)
            )
           { Current = dig;
           } else
           { Current = Current + dig;
           };
    }; 
  };
   document.Calculator.Display.value = Current;
 }



function Dot()
{
  if(Current.length == 0)
   {Current = "0.";
   }else
   {if (Current.indexOf(".") == -1)
       { Current = Current + ".";
       };
     };
  document.Calculator.Display.value = Current;
}

function Clear()
{ Current = "0";
  Operation = 0;
  Memory = "0";
  document.Calculator.Display.value = Current;
}



function Operate(op)
{
 if (op.indexOf("*") > -1){Operation = 1;};
 if (op.indexOf("/") > -1){Operation = 2;};
 if (op.indexOf("+") > -1){Operation = 3;};
 if (op.indexOf("-") > -1){Operation = 4;};

Memory = Current;
Current ="";
document.Calculate.Disaply.value = Current;

}


function Calculate(){
 if (Operation == 1){ Current = eval(Memory) * eval(Current);};
 if (Operation == 2){ Current = eval(Memory) / eval(Current);};
 if (Operation == 3){ Current = eval(Memory) + eval(Current);};
 if (Operation == 4){ Current = eval(Memory) - eval(Current);};

Operation = 0;
Memory = "0";
document.Calcualtor.Display.value = Current;

}


function FixCurrent(){

Current = document.Calculator.Display.value;
Current = "" + parseFloat(Current);
if (current.indexOF("NaN") !=-1)
  { Current = "Invalid entry";
  };
  document.Calculator.Display.value = Current;
}


//https://www.anaesthetist.com/mnm/javascript/calc.htm
